// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth, createUserWithEmailAndPassword,
  GoogleAuthProvider, signInWithPopup, signOut, updateProfile, signInWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';
// import { getFirestore, collection, addDoc } from 'firebase/firestore';

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

// Crear un nuevo usuario y registrarse
// Funcion para guardar los datos de usuario
// eslint-disable-next-line max-len
export const signUp = (email, password, userName) => createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user; // obtiene el usuario
    updateProfile(auth.currentUser, { // actualiza el nombre del usuario
      displayName: userName, // nombre del usuario
    });
    console.log(user);
    sendEmailVerification(auth.currentUser).then(() => { // envia correo de verificacion
      // eslint-disable-next-line no-alert
      alert('Hemos enviado a tu correo electrónico el enlace de confirmación');
    });
  });

// Iniciar sesion con google
// export const provider = new GoogleAuthProvider();
// export const loginGoogle = () => signInWithPopup(auth, provider);

export const loginGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      window.location.hash = '#/home';
      // This gives you a Google Access Token. You can use it to access the Google API.
      // The signed-in user info.
    // ...
    }).catch((error) => {
      console.error(error);
    // Handle Errors here.
      // The AuthCredential type that was used.
    // ...
    });
};

// Funcion para cerrar sesion desde Home
export const logOut = () => signOut(auth).then(() => {
  // Sign-out successful.
  window.location.hash = '#/';
}).catch((error) => {
  console.error(error);
  // An error happened.
});

// Funcion para Iniciar sesión de usuarios existentes
export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    window.location.hash = '#/home';
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    console.error(error);
    const errorCode = error.code;
    const errorMessage = error.message;
  });
