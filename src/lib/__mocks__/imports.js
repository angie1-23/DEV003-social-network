export const createUserWithEmailAndPassword = jest.fn(() => Promise.resolve({}));
export const signOut = jest.fn(() => Promise.resolve({}));
export const getAuth = () => ({
  currentUser: {
    photoURL: 'photo.png',
    displayName: 'Fer',
  },
});
export const initializeApp = () => Promise.resolve({});
export const getFirestore = () => jest.fn();
export const GoogleAuthProvider = class {};
export const sendPasswordResetEmail = jest.fn(() => Promise.resolve({}));
export const signInWithPopup = jest.fn(() => Promise.resolve({}));
export const sendEmailVerification = jest.fn(() => Promise.resolve({}));
export const signInWithEmailAndPassword = jest.fn(() => Promise.resolve({}));
export const deleteDoc = jest.fn(() => Promise.resolve({}));
export const collection = jest.fn(() => Promise.resolve({}));
export const addDoc = jest.fn(() => Promise.resolve({}));
export const getDocs = jest.fn(() => Promise.resolve({}));
export const doc = () => Promise.resolve({});
export const updateDoc = jest.fn(() => Promise.resolve({}));
export const onSnapshot = jest.fn();
export const getDoc = jest.fn(() => Promise.resolve({}));
export const onAuthStateChanged = jest.fn(() => Promise.resolve({}));
export const updateProfile = jest.fn(() => Promise.resolve({}));
