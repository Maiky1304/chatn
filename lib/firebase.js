import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDbXtJwpijL8mPeaNV_9q1vDDSAQ3RuvgU",
    authDomain: "chatn-174bb.firebaseapp.com",
    projectId: "chatn-174bb",
    storageBucket: "chatn-174bb.appspot.com",
    messagingSenderId: "64704761732",
    appId: "1:64704761732:web:a8d04a354b8b98d376d7d1"
};

const firebase = initializeApp(firebaseConfig);
const database = getFirestore(firebase);

export { firebase, database };