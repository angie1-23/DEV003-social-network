// Import the functions you need from the SDKs you need
import {
  getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc,
} from 'firebase/firestore';
import {
  initializeApp,
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider, signInWithPopup, signOut, updateProfile, signInWithEmailAndPassword,
  sendEmailVerification, sendPasswordResetEmail,
} from './imports.js';

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
export const db = getFirestore(app);
// console.log(app);

// Crear un nuevo usuario y registrarse
// eslint-disable-next-line max-len
export const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);
// .then((userCredential) => {
//   const user = userCredential.user; // obtiene el usuario
console.log('Aqui SignUp');
// return userCredential;
// });

// Funcion para guardar los datos de usuario
export const updateData = (userName) => updateProfile(auth.currentUser, {
  // actualiza el nombre del usuario
  displayName: userName,
}).then(() => {
  // console.log(auth.currentUser);
  console.log('Aqui Update');
});

// Funcion para enviar el correo de verificacion
export const sendEmail = () => sendEmailVerification(auth.currentUser);

// Iniciar sesion con google
export const provider = new GoogleAuthProvider();
export const loginGoogle = () => signInWithPopup(auth, provider);

// Funcion para cerrar sesion desde Home
export const logOut = () => signOut(auth);

// Funcion para Iniciar sesión de usuarios existentes
export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

// Funcion para restablecer contraseña
export const sendPassword = (email) => sendPasswordResetEmail(auth, email);

// Funcion para guardar datos de publicaciones.
export const saveTask = (title, description) => addDoc(collection(db, 'tasks'), { title, description });
// Funcion para traer los datos
export const getTasks = () => getDocs(collection(db, 'tasks'));

// Funcion para imprimir los datos en la interfaz
export const getAllTasks = (querySnapshot) => {
  onSnapshot(collection(db, 'tasks'), querySnapshot);
};
// Funcion para eliminar las publicaciones
export const deleteTask = (id) => deleteDoc(doc(db, 'tasks', id));

// Funcion para editar una publicacion
export const getTask = (id) => getDoc(doc(db, 'tasks', id));

// Funcion para actualizar la publicacion
export const updateTask = (id, newFields) => updateDoc(doc(db, 'tasks', id), newFields);
