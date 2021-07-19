import admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json';

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        ...serviceAccount,
        private_key_id: process.env.FIRESTORE_ID,
        private_key: process.env.FIRESTORE_KEY.replace(/\\n/g, '\n'),
      }),
      databaseURL: "https://war-room-e7e69-default-rtdb.europe-west1.firebasedatabase.app"
    });
  } catch (error) {
    console.log('Firebase admin initialization error', error.stack);
  }
}
export default admin.firestore();