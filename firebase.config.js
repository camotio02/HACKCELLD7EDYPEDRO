// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'
import { getMessaging } from 'firebase/messaging/sw';
const firebaseConfig = {
  apiKey: "AIzaSyDkn8IothnMAQFuNXFTCohIZxwvTo91vkM",
  authDomain: "hackcelledypedro.firebaseapp.com",
  projectId: "hackcelledypedro",
  storageBucket: "hackcelledypedro.appspot.com",
  messagingSenderId: "791591495362",
  appId: "1:791591495362:web:780a2cc884446dddf27d5b",
  measurementId: "G-XXKQ1KT81D"
};
const app = initializeApp(firebaseConfig)
const db = getFirestore(app);
const messaging = getMessaging(app);
const analytics = getAnalytics(app);

export { db, messaging, analytics };