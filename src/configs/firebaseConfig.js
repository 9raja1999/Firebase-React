import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database'


const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain:  process.env.AUTH_DOMAIN,
    databaseURL: process.env.DB_NAME,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGE_SENDER_ID,
    appId: process.env.APP_ID
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
export const auth = getAuth(app)