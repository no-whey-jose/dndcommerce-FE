import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCTLjqxiq7kOnJIjMZPmNSNQEfX62du-pA',
  authDomain: 'dnd-commerce-db.firebaseapp.com',
  projectId: 'dnd-commerce-db',
  storageBucket: 'dnd-commerce-db.appspot.com',
  messagingSenderId: '583646107511',
  appId: '1:583646107511:web:2358069b26f7d71578b372',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
