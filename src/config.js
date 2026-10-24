/* Settings for this build of the app.
 * googleWebClientId: OAuth client ID of the "Web application" client used by the phone/web app to sign in
 * to Google Drive (see docs/google-setup.md). The desktop app keeps its own client in google-oauth.local.json.
 * Client IDs are public by design, so this file is safe to publish. */
window.JT = window.JT || {};
JT.CONFIG = {
  googleWebClientId: ''
};
