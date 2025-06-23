import { initializeApp, getApps, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import admin from "firebase-admin";

if (getApps().length === 0) {
  initializeApp({
    credential: applicationDefault()
  });
}

export const adminDB = getFirestore();
export { admin };
