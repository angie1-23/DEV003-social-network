export {
  getAuth, createUserWithEmailAndPassword,
  GoogleAuthProvider, signInWithPopup, signOut, updateProfile, signInWithEmailAndPassword,
  sendEmailVerification, sendPasswordResetEmail, onAuthStateChanged,
} from 'firebase/auth';

export {
  getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc,
} from 'firebase/firestore';

export { initializeApp } from 'firebase/app';
