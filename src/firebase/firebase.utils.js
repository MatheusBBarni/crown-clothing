import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDgqhu-FtmeTapeHx5TmOKU3Exfh1STrGw",
  authDomain: "crown-db-513b3.firebaseapp.com",
  databaseURL: "https://crown-db-513b3.firebaseio.com",
  projectId: "crown-db-513b3",
  storageBucket: "crown-db-513b3.appspot.com",
  messagingSenderId: "956923956434",
  appId: "1:956923956434:web:5fd973dffc8dda1ac1f10b"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
