// Exposes a small, explicit API to the renderer.
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  // learner profiles
  profilesList: () => ipcRenderer.invoke('profiles:list'),
  profilesCreate: (name, id) => ipcRenderer.invoke('profiles:create', name, id),
  profilesRename: (id, name) => ipcRenderer.invoke('profiles:rename', id, name),
  profilesDelete: id => ipcRenderer.invoke('profiles:delete', id),
  profilesTouch: id => ipcRenderer.invoke('profiles:touch', id),
  profileLoad: id => ipcRenderer.invoke('profile:load', id),
  profileSave: (id, json, summary) => ipcRenderer.send('profile:save', id, json, summary),
  profileSaveSync: (id, json, summary) => ipcRenderer.sendSync('profile:save-sync', id, json, summary),
  // speech
  ttsVoices: () => ipcRenderer.invoke('tts:voices'),
  ttsSpeak: (text, rate, voice, ssml) => ipcRenderer.invoke('tts:speak', text, rate, voice, ssml),
  openSpeechSettings: () => ipcRenderer.invoke('open:speech-settings'),
  // Google sign-in for Drive sync (per learner; tokens stay in the main process)
  googleAvailable: () => ipcRenderer.invoke('google:available'),
  googleStatus: id => ipcRenderer.invoke('google:status', id),
  googleSignIn: id => ipcRenderer.invoke('google:signin', id),
  googleToken: id => ipcRenderer.invoke('google:token', id),
  googleSignOut: id => ipcRenderer.invoke('google:signout', id),
  googleRekey: (from, to) => ipcRenderer.invoke('google:rekey', from, to)
});
