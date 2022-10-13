import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAWpFKX4D9-2m7B7e4s1L_9JtuaJOO3gl4',
  authDomain: 'ecommerce-2-67aa4.firebaseapp.com',
  projectId: 'ecommerce-2-67aa4',
  storageBucket: 'ecommerce-2-67aa4.appspot.com',
  messagingSenderId: '196937832313',
  appId: '1:196937832313:web:11925f02215c139cbe01a8',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
