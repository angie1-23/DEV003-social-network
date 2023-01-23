/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,
} from 'firebase/auth';
// import { getFirestore, collection, addDoc } from 'firebase/firestore';
// import { showMessage } from './showMessage.js';
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
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

// export const db = getFirestore(app);
console.log(app);

// Crear un nuevo usuario //
export const register = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      console.log(userCredential);
      // const user = userCredential.user;
      window.location.hash = '#/home';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      console.log(errorCode);
      // Traemos los ID de los spam loginem
      const missingEmail = document.getElementById('missingEmail');
      const loginNulo = document.getElementById('loginEmailNull');
      const emailInUse = document.getElementById('loginEmailInUse');
      const passwordWeak = document.getElementById('registerWeakPassword');
      const missingPassword = document.getElementById('missingPassword');
      const somethingWrong = document.getElementById('somethingWrong');

      if (errorCode === 'auth/missing-email') {
        missingEmail.style.display = 'block';
        loginNulo.style.display = 'none';
        emailInUse.style.display = 'none';
      } else if (errorCode === 'auth/invalid-email') {
        loginNulo.style.display = 'block';
        missingEmail.style.display = 'none';
        emailInUse.style.display = 'none';
      } else if (error.code === 'auth/email-already-in-use') {
        emailInUse.style.display = 'block';
        missingEmail.style.display = 'none';
        loginNulo.style.display = 'none';
      } else if (error.code === 'auth/weak-password') {
        passwordWeak.style.display = 'block';
        missingPassword.style.display = 'none';
      } else if (error.code === 'auth/internal-error') {
        passwordWeak.style.display = 'none';
        missingPassword.style.display = 'block';
      } else if (error.code) {
        somethingWrong.style.display = 'block';
      }
    });
};

// Iniciar sesion con google
export const loginGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
      window.location.hash = '#/home';
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(token, user);
    // ...
    }).catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    });
};

// const userData = async (userId, userName, age) => {
//   try {
//     const docRef = await addDoc(collection(db, 'users'), {
//       userName: 'Ada',
//       fullName: 'Lovelace',
//       location: 1815,
//     });
//     console.log('Document written with ID: ', docRef.id);
//   } catch (e) {
//     console.error('Error adding document: ', e);
//   }
// };
