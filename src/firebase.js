import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDV1VnhO71mi3Y1pFnRj57bufwy-cYeRrg",
    authDomain: "locatimi-50202.firebaseapp.com",
    projectId: "locatimi-50202",
    storageBucket: "locatimi-50202.firebasestorage.app",
    messagingSenderId: "796201283975",
    appId: "1:796201283975:web:fda5082e503b2d2a2b6322",
    measurementId: "G-M7CDGS4JRN"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);