
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDkn8IothnMAQFuNXFTCohIZxwvTo91vkM",
  authDomain: "hackcelledypedro.firebaseapp.com",
  projectId: "hackcelledypedro",
  storageBucket: "hackcelledypedro.appspot.com",
  messagingSenderId: "791591495362",
  appId: "1:791591495362:web:780a2cc884446dddf27d5b",
  measurementId: "G-XXKQ1KT81D"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);