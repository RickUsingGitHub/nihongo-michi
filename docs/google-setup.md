# Setting up Google Drive sync

Learners can sync their progress between the desktop app and the phone app through their own Google Drive.
For that, whoever publishes the app registers it with Google once (free, about 15 minutes). Learners never see
any of this; they just tap **Connect** or **Continue with Google**.

The app only asks for the `drive.appdata` permission: a hidden app folder in the learner's Drive that only this app
can read. It can't see any of their other files.

## 1. Create a Google Cloud project

1. Go to <https://console.cloud.google.com> and sign in with the Google account that should own the app.
2. Project picker (top bar) → **New project** → name it, e.g. `Nihongo Michi` → **Create**. Make sure it's selected.

## 2. Turn on the Google Drive API

Open <https://console.cloud.google.com/apis/library/drive.googleapis.com> and click **Enable**.

## 3. Set up the sign-in screen (Google Auth Platform)

1. Menu → **APIs & Services → OAuth consent screen** (it opens *Google Auth Platform*) → **Get started**.
   - App name: `Nihongo Michi`; user support email: yours
   - Audience: **External**
   - Contact email: yours → agree to the policy → **Create**
2. **Data Access** → *Add or remove scopes* → tick these three → **Update** → **Save**:
   - `https://www.googleapis.com/auth/drive.appdata`
   - `openid`
   - `https://www.googleapis.com/auth/userinfo.email`

   All three are *non-sensitive*, so Google doesn't need to review the app.
3. **Audience** → **Publish app**. In *Testing* mode only listed test users can sign in and sign-ins expire after 7 days.
4. Optional: under **Branding**, add the home page (`https://<user>.github.io/<repo>/`) and the privacy policy
   (`https://<user>.github.io/<repo>/privacy.html`).

## 4. Create the two OAuth clients

**Clients** → **Create client**:

1. **Web application** (used by the phone/web app)
   - Authorized JavaScript origins: `https://<user>.github.io` (plus `http://localhost:8765` for local testing)
   - Authorized redirect URIs: `https://<user>.github.io/<repo>/` (plus `http://localhost:8765/`). The trailing slash matters.
   - Put its **client ID** in `src/config.js` as `googleWebClientId`. Client IDs are public, so this file is committed.
2. **Desktop app** (used by the Windows app)
   - Copy the **client ID** and **client secret** when they're shown (Google only shows the secret once).
   - Save them in `google-oauth.local.json` next to `package.json`:

     ```json
     { "clientId": "….apps.googleusercontent.com", "clientSecret": "GOCSPX-…" }
     ```

     This file is git-ignored but packaged into the `.exe` by `npm run package`. Google treats a desktop app's
     secret as not confidential (it ships inside every copy), but keeping it out of the repository avoids
     GitHub's secret-scanning warnings.

Without these settings the app works exactly the same, just without the Sync option.
