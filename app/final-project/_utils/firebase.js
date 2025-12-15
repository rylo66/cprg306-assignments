import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// I know I'm not supposed to hardcode these, but for the sake of the demo app, I will.
const firebaseConfig = {
  apiKey: "AIzaSyAddYgr-qbkPZB2Oc8J7Ji15TKA0NCKZpQ",
  authDomain: "week-9-bdf3e.firebaseapp.com",
  projectId: "week-9-bdf3e",
  storageBucket: "week-9-bdf3e.firebasestorage.app",
  messagingSenderId: "985250300610",
  appId: "1:985250300610:web:09a70e014a220822ffb15b",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

  NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="week-9-bdf3e.firebaseapp.com"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="week-9-bdf3e"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="week-9-bdf3e.firebasestorage.app"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="985250300610"
NEXT_PUBLIC_FIREBASE_APP_ID="1:985250300610:web:09a70e014a220822ffb15b"