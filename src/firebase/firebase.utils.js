import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useRef } from 'react';

const config = {
  apiKey: "AIzaSyDgqhu-FtmeTapeHx5TmOKU3Exfh1STrGw",
  authDomain: "crown-db-513b3.firebaseapp.com",
  databaseURL: "https://crown-db-513b3.firebaseio.com",
  projectId: "crown-db-513b3",
  storageBucket: "crown-db-513b3.appspot.com",
  messagingSenderId: "956923956434",
  appId: "1:956923956434:web:5fd973dffc8dda1ac1f10b"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch(error) {
      console.log('error on user creation', error);
    }
    return userRef;
  }
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
