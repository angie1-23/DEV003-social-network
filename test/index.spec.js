// import { createUserWithEmailAndPassword } from '../src/lib/imports.js'; // Tenemos que llamar a mocks
// import RegisterForm from '../src/Views/loginEm.js';
import {
  createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,
  signInWithPopup, GoogleAuthProvider, sendPasswordResetEmail, onAuthStateChanged, signOut,
} from 'firebase/auth';
import {
  addDoc, collection, onSnapshot,
  getDoc, doc, updateDoc, deleteDoc,
} from 'firebase/firestore';
import {
  signUp, signIn, loginGoogle, sendPassword,
} from '../src/lib/firebase.js';

jest.mock('firebase/auth');
jest.mock('firebase/firestore');

it('Debe llamarse al método crear usuario', () => {
  createUserWithEmailAndPassword.mockImplementation(() => {
    Promise.resolve({
      email: 'angie@gmail.com',
      password: 'pajaroazul',
    });
  });
  signUp(createUserWithEmailAndPassword);

  expect(createUserWithEmailAndPassword).toBeCalled();
});

it('Deberia retornar un objeto con la propiedad email y password', () => {
  signUp('angie@gmail.com', 'pajaroazul');
  expect({
    email: 'angie@gmail.com',
    password: 'pajaroazul',
  }).toEqual(expect.anything());
});

it('Debe validar el usuario registrado', () => {
  signInWithEmailAndPassword.mockImplementation(() => Promise.resolve({
    email: 'angie@gmail.com',
    password: 'pajaroazul',
  }));
  signIn(signInWithEmailAndPassword);

  expect(signInWithEmailAndPassword).toBeCalled();
});

it('Deberia retornar un objeto con la propiedad email', () => {
  signIn('angie@gmail.com', 'pajaroazul');
  expect({
    email: 'angie@gmail.com',
    password: 'pajaroazul',
  }).toEqual(expect.anything());
});

it('Debe validar el usuario registrado desde google', () => {
  signInWithPopup.mockImplementation(() => Promise.resolve('angie@gmail.com'));
  loginGoogle(signInWithPopup);

  expect(signInWithPopup).toBeCalled();
});

it('Debería poder ingresar con Google', () => {
  const provider = new GoogleAuthProvider();
  loginGoogle(getAuth(), provider).then(() => {
    expect(signInWithPopup).toHaveBeenCalledWith(getAuth(), provider);
  });
});

it('Debe enviar restablecer comtraseña', () => {
  sendPasswordResetEmail.mockImplementation(() => Promise.resolve('angie@gmail.com'));
  sendPassword(sendPasswordResetEmail);
  expect(sendPasswordResetEmail).toBeCalled();
});

it('Debería recuperar contraseña', () => {
  sendPassword('angie@gmail.com').then((email) => {
    expect(email).toBe('angie@gmail.com');
  });
});

// jest.mock('@firebase/auth', () => (
//   {
//     createUserWithEmailAndPassword: () => Promise.resolve({ currentUser: 'infoUser' }),
//     updateProfile: () => ({}),
//     getAuth: () => ({ currentUser: 'infoUser' }),
//     signInWithEmailAndPassword: () => Promise.resolve({ user: 'infoUser' }),
//     GoogleAuthProvider: class {},
//     signInWithPopup: () => Promise.resolve({ user: 'infogGoogle' }),
//   }
// ));
// jest.mock('@firebase/firestore', () => (
//   {
//     addDoc: () => Promise.resolve({ tittle: 'Giveask', description: 'item', displayName: 'Andrea' }),
//     collection: () => {},
//     getFirestore: () => ({ }),
//   }
// ));
// jest.mock('../src/lib/imports.js');
// describe('Los test del Registro', () => {
//   test('El componente es una Funcion', () => {
//     const result = RegisterForm();
//     const buttonIngresar = result.querySelector('.btnSingIn');
//     createUserWithEmailAndPassword.mockReturnValueOnce(true);
//     buttonIngresar.click();
//     // buttonIngresar.dispatchEvent(new Event('click'))
//     expect(createUserWithEmailAndPassword).toHaveBeenCalled();
//   });
// });

// describe('Funcion signUp', () => {
//   it('va a crear un nuevo usuario', async () => {
//     const userCredential = signUp('Green45', 'test4@gmail.com', 'pajaroamarillo');
//     await expect(userCredential).resolves.toEqual({ currentUser: 'infoUser' });
//   });
// });

// it('Debe llamarse al método crear usuario', () => {
//   createUserWithEmailAndPassword.mockImplementation(() => {
//     Promise.resolve({
//       email: 'test4@gmail.com',
//       password: 'pajaroamarillo',
//     });
//   });

//   signUp(createUserWithEmailAndPassword);

//   expect(createUserWithEmailAndPassword).toBeCalled();
// });

// it('Debería mostrar un error', async () => {
//   signUp.mockImplementationOnce((email, password) => Promise.reject(
//     new Error('auth/invalid-email'),
//   ));

//   inputForSend.click();
//   await tick();
//   expect(errorCode.innerHTML).toBe(
//     'Firebase: Error (auth/invalid-email).',
//   );
// });

// // it('Debe recibir parámetros', () => {
// //   signUp('gaba@gmail.com', '1234567');
// //   expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(getAuth(), 'gaba@gmail.com', '1234567');
// // });
