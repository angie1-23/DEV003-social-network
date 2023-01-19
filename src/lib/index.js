/* eslint-disable import/no-extraneous-dependencies */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC-3t7iYsM_AgIlBvl-eyks8qmDQnvbtEE',
  authDomain: 'recycling24-7.firebaseapp.com',
  projectId: 'recycling24-7',
  storageBucket: 'recycling24-7.appspot.com',
  messagingSenderId: '730851882357',
  appId: '1:730851882357:web:7b91829bb22f7cd18fcf3c',
  measurementId: 'G-HFPH2RKQGT',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// necesitamos await?
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

onAuthStateChanged(auth, user => {
  // Check for user status
});

// export const myFunction = () => {
//   // aqui tu codigo
//   console.log('Hola mundo!');
// };
