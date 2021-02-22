module.exports = {
  "type": "service_account",
  "project_id": process.env.FIREBASE_PROJECT_ID,
  "private_key_id": "95496265e75cbe00388662c12ed58738e6a93db7",
  "private_key": process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  "client_email": process.env.FIREBASE_CLIENT_EMAIL,
  "client_id": "115924474000004117663",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-l9oc8%40senai-overflow-70c48.iam.gserviceaccount.com"
}
