import { initializeApp, cert, getApps, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

if (getApps().length === 0) {
  try {
    // 優先嘗試使用預設憑證（在 GCP 環境中）
    initializeApp({
      credential: applicationDefault(),
    });
  } catch (error) {
    // 如果無法使用預設憑證，則使用環境變數中的服務帳號
    const serviceAccount = JSON.parse(
      process.env.NEXT_PUBLIC_FIREBASE_SERVICE_ACCOUNT_KEYS
    );
    initializeApp({
      credential: cert(serviceAccount),
    });
  }
}

export const adminDB = getFirestore();
