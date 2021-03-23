import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD6KI5RKhHmbFVXBfV7aghG9yIq2X4FP4Y',
  authDomain: 'netflix-ca447.firebaseapp.com',
  projectId: 'netflix-ca447',
  storageBucket: 'netflix-ca447.appspot.com',
  messagingSenderId: '642469964311',
  appId: '1:642469964311:web:a5a5b1d30e112111194a52',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
