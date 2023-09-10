import admin from 'firebase-admin';

// firebase admin stuff
let serviceAccount = require('../../onlinetown-e4a7a-6e8b5a985dcf.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export const db = admin.firestore();
export const auth = admin.auth();
