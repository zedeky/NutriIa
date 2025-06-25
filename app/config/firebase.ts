import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD3zXHa6L1NB_1DWR0H_jTve-A9eKah14",
  authDomain: "nutriia-66dba.firebaseapp.com",
  projectId: "nutriia-66dba",
  storageBucket: "nutriia-66dba.appspot.com",
  messagingSenderId: "12866867219",
  appId: "1:12866867219:web:f4f24a470256ca6bdadafe6",
  measurementId: "G-VMGKRKHCGH"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
