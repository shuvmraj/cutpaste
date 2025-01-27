import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDEmwvTEwoiyk2PLrfuy2vMCG0y0dC-2u0",
    authDomain: "cutpaste-554f6.firebaseapp.com",
    databaseURL: "https://cutpaste-554f6-default-rtdb.firebaseio.com",
    projectId: "cutpaste-554f6",
    storageBucket: "cutpaste-554f6.firebasestorage.app",
    messagingSenderId: "374693823984",
    appId: "1:374693823984:web:97ab72748ab96ea80d8935",
    measurementId: "G-V7EZ46Y526"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);