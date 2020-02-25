import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA-JTKmuyrM_JMWwZ2VlOCTwJ5OOF8rR28',
  authDomain: 'clothing-store-9f4f3.firebaseapp.com',
  databaseURL: 'https://clothing-store-9f4f3.firebaseio.com',
  projectId: 'clothing-store-9f4f3',
  storageBucket: 'clothing-store-9f4f3.appspot.com',
  messagingSenderId: '495803652371',
  appId: '1:495803652371:web:f0c0d1d28c1eb979fd22e6',
  measurementId: 'G-EMCEX0ZB8G'
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
    } catch (error) {
      console.log('error creatung user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
