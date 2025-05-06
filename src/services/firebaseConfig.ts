import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBm9nzBFXe5X6_MM7FmvLvUh5avvT6hE44",
  authDomain: "desconet-8d482.firebaseapp.com",
  projectId: "desconet-8d482",
  storageBucket: "desconet-8d482.appspot.com",
  messagingSenderId: "799067158158",
  appId: "1:799067158158:android:bfd4345f8d57beb656bbdf"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
