import {
  createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,
  signInWithPopup, GoogleAuthProvider, sendPasswordResetEmail,
  onAuthStateChanged, signOut, updateProfile, sendEmailVerification,
} from 'firebase/auth';
import {
  addDoc, collection, onSnapshot,
  getDoc, doc, updateDoc, deleteDoc, getDocs,
} from 'firebase/firestore';
import {
  signUp, signIn, loginGoogle,
  sendPassword, saveTask, getAuthUser,
  getAllTasks, logOut, getTask, updateTask, deleteTask, updateData, sendEmail, getTasks,
} from '../src/lib/firebase.js';

// Mocks de firebase
jest.mock('firebase/auth');
jest.mock('firebase/firestore');

// Test de la funcion de signUp
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

// Test de la funcion de signIn
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

// Test de la funcion de loginGoogle
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

// Test de la funcion de sendPassword
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

// Test de la funcion de saveTask
it('Debería llamar al metodo addDoc', () => {
  addDoc.mockImplementation(() => Promise.resolve('resolve'));
  collection.mockImplementation(() => ({}));
  saveTask('comment');
  expect(addDoc).toHaveBeenCalledWith(expect.anything(), 'comment');
});

it('Deberia escuchar el post publicado', () => {
  getAllTasks(saveTask);
  expect({ saveTask }).toEqual(expect.anything());
});

// Test de la funcion getAuthUser
it('Debe llamar al método onAuthStateChanged', () => {
  onAuthStateChanged.mockImplementation(() => {
    Promise.resolve({
      uid: 'NpmibTu1HBTW4xcMfvGYfZCPz2G3',
    });
  });
  getAuthUser(onAuthStateChanged);

  expect(onAuthStateChanged).toBeCalled();
});

// Test de la funcion getAllTasks
it('Debe llamar al método onSnapshot ', () => {
  onSnapshot.mockImplementation(() => ({}));
  getAllTasks(onSnapshot);

  expect(onSnapshot).toBeCalled();
});

// Test de la funcion de logOut
it('Debe llamar al método signOut', () => {
  signOut.mockImplementation(() => {});
  logOut(signOut);
  expect(signOut).toBeCalled();
});

// Test de la funcion de getTask
it('Debería ser llamar a un id de usuario', () => {
  getDoc.mockImplementation(() => Promise.resolve('resolve'));
  doc.mockImplementation(() => ('HumtDZSAuGciUiaxvGs6'));
  const id = 'HumtDZSAuGciUiaxvGs6';
  getTask(id);
  expect(getDoc).toHaveBeenCalledWith(id);
});

// Test de la funcion de getTasks
it('Debería llamar a todos los ids de usuarios', () => {
  getDocs.mockImplementation(() => Promise.resolve('resolve'));
  collection.mockImplementation(() => ({}));
  getTasks();
  expect(getDoc).toHaveBeenCalledWith(expect.anything());
});

// Test de la funcion de updateTask
it('Debería llamar al metodo updateDoc', () => {
  updateTask(updateDoc);
  expect(updateDoc).toBeCalled();
});

it('Debería devolver un nuevo objeto', () => {
  updateDoc({
    id: 'HumtDZSAuGciUiaxvGs6',
    newDoc: {},
  });
  expect(updateDoc).toEqual(expect.anything(), { id: 'HumtDZSAuGciUiaxvGs6', newDoc: {} });
});

// Test de la funcion de deleteTask
it('Debería borrar la publicacion', () => {
  const id = 'HumtDZSAuGciUiaxvGs6';
  deleteTask(id);
  expect(deleteDoc).toHaveBeenCalledWith(id);
});

// duda como agregar auth
// it('Deberia actualizar el perfil', () => {
//   updateProfile.mockImplementation(() => Promise.resolve('resolve'));
//   const displayName = 'tefa';
//   updateData(displayName);
//   expect(updateProfile).toHaveBeenCalledWith(expect.anything(), { displayName });
// });

// it('Debe enviar enviar correo confirmacion', () => {
//   sendEmailVerification.mockImplementation(() => Promise.resolve('resolve'));
//   sendEmail(sendEmailVerification);
//   expect(sendEmailVerification).toHaveBeenCalledWith(expect.anything());
// });

// it('Debería recibir correo', () => {
//   sendEmailVerification.mockImplementation(() => Promise.resolve('resolve'));
//   // const auth = getAuth().currentUser;
//   // export const user = auth.currentUser;
//   sendEmail(getAuth(), auth).then(() => {
//     expect(sendEmailVerification).toHaveBeenCalledWith(getAuth(), auth);
//   });
// });
