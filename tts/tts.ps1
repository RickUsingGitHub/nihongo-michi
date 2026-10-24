# Nihongo Michi - text-to-speech helper.
# Reads one JSON request per line on stdin and writes one JSON reply per line on stdout.
# Uses the Windows OneCore speech engine (Windows.Media.SpeechSynthesis), which is where
# the Japanese voices (Ayumi, Haruka, Ichiro, Sayaka...) live once the Japanese speech pack is installed.
#   {"id":1,"cmd":"voices"}                                  -> {"id":1,"voices":[...]}
#   {"id":2,"cmd":"speak","text":"...","rate":1.0,"voice":""} -> {"id":2,"wav":"<base64>"}
#   optional "ssml":"<speak ...>" is spoken instead of "text"

$ErrorActionPreference = 'Stop'
[Console]::OutputEncoding = [Text.Encoding]::UTF8

Add-Type -AssemblyName System.Runtime.WindowsRuntime
$null = [Windows.Media.SpeechSynthesis.SpeechSynthesizer, Windows.Media.SpeechSynthesis, ContentType = WindowsRuntime]

$asTaskGeneric = [System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object {
    $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and
    $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1'
} | Select-Object -First 1

function Await($operation, [Type]$resultType) {
    $task = $asTaskGeneric.MakeGenericMethod($resultType).Invoke($null, @($operation))
    $null = $task.Wait(-1)
    $task.Result
}

$synth = New-Object Windows.Media.SpeechSynthesis.SpeechSynthesizer

function Get-VoiceList {
    [Windows.Media.SpeechSynthesis.SpeechSynthesizer]::AllVoices | ForEach-Object {
        [ordered]@{ id = $_.Id; name = $_.DisplayName; lang = $_.Language; gender = "$($_.Gender)" }
    }
}

function Get-Voice($voiceId) {
    $all = [Windows.Media.SpeechSynthesis.SpeechSynthesizer]::AllVoices
    $v = $null
    if ($voiceId) { $v = $all | Where-Object { $_.Id -eq $voiceId } | Select-Object -First 1 }
    if (-not $v) { $v = $all | Where-Object { $_.Language -like 'ja*' } | Select-Object -First 1 }
    $v
}

while ($true) {
    $line = [Console]::In.ReadLine()
    if ($null -eq $line) { break }
    if ($line.Trim() -eq '') { continue }
    $id = 0
    try {
        $req = $line | ConvertFrom-Json
        $id = $req.id
        if ($req.cmd -eq 'voices') {
            $out = [ordered]@{ id = $id; voices = @(Get-VoiceList) }
        }
        elseif ($req.cmd -eq 'speak') {
            $voice = Get-Voice $req.voice
            if (-not $voice) { throw 'no-japanese-voice' }
            $synth.Voice = $voice
            $rate = 1.0
            if ($req.rate) { $rate = [double]$req.rate }
            $synth.Options.SpeakingRate = $rate
            # SSML lets the app pin the reading of each kanji word (<sub alias="おと">音</sub>)
            if ($req.ssml) {
                $stream = Await ($synth.SynthesizeSsmlToStreamAsync([string]$req.ssml)) ([Windows.Media.SpeechSynthesis.SpeechSynthesisStream])
            }
            else {
                $stream = Await ($synth.SynthesizeTextToStreamAsync([string]$req.text)) ([Windows.Media.SpeechSynthesis.SpeechSynthesisStream])
            }
            $netStream = [System.IO.WindowsRuntimeStreamExtensions]::AsStreamForRead($stream)
            $mem = New-Object System.IO.MemoryStream
            $netStream.CopyTo($mem)
            $netStream.Dispose()
            $stream.Dispose()
            $out = [ordered]@{ id = $id; wav = [Convert]::ToBase64String($mem.ToArray()) }
        }
        else {
            $out = [ordered]@{ id = $id; error = "unknown command" }
        }
    }
    catch {
        $out = [ordered]@{ id = $id; error = $_.Exception.Message }
    }
    [Console]::Out.WriteLine(($out | ConvertTo-Json -Compress -Depth 4))
    [Console]::Out.Flush()
}
