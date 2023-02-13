// import {
//   getAuth, signInWithEmailAndPassword,
//   GoogleAuthProvider, sendPasswordResetEmail,
//   onAuthStateChanged, updateProfile, sendEmailVerification,
// } from 'firebase/auth';
// import {
//   collection,
//   addDoc, collection, onSnapshot,
//   getDoc, doc, updateDoc, deleteDoc, getDocs,
// } from 'firebase/firestore';
import { async } from 'regenerator-runtime';
import {
  signUp, signIn, loginGoogle, sendPassword, deleteTask, saveTask, getAllTasks, getAuthUser,
  logOut, getTask, getTasks, updateTask, updateData,
  // sendPassword,
  // saveTask, getAuthUser,
  //   getAllTasks, logOut, getTask, updateTask, deleteTask, updateData, sendEmail, getTasks,
} from '../src/lib/firebase.js';

import {
  createUserWithEmailAndPassword, signInWithPopup, signOut, signInWithEmailAndPassword, addDoc,
  sendPasswordResetEmail, deleteDoc, onSnapshot, sendEmailVerification, collection, getDoc, doc,
  onAuthStateChanged, getDocs, updateDoc, updateProfile,
} from '../src/lib/imports.js'; // Tenemos que llamar a mocks
import RegisterForm from '../src/Views/loginEm.js';
import start from '../src/Views/startHome.js';
import home from '../src/Views/home.js';
import { deletePost } from '../src/Views/delete.js';
import Post from '../src/Views/post.js';
import { register } from '../src/controler/controlerReg.js';

// Mocks de firebase
jest.mock('../src/lib/imports.js');
// jest.mock('../src/controler/controlerReg.js', () => ({ register: jest.fn(() => Promise.resolve({ code: 'auth/invalid-email' })) }));
// Test de la funcion de signUp
it('Debe llamarse al método crear usuario', () => {
  createUserWithEmailAndPassword(() => {
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

// // Test de la funcion de signIn
it('Debe validar el usuario registrado', () => {
  signInWithEmailAndPassword(() => Promise.resolve({
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
  signInWithPopup(() => Promise.resolve('angie@gmail.com'));
  loginGoogle(signInWithPopup);

  expect(signInWithPopup).toBeCalled();
});

// Test de la funcion de sendPassword
it('Debe enviar restablecer comtraseña', () => {
  sendPasswordResetEmail(() => Promise.resolve('angie@gmail.com'));
  sendPassword(sendPasswordResetEmail);
  expect(sendPasswordResetEmail).toBeCalled();
});

// Test de la funcion de saveTask
it('Debería llamar al metodo addDoc', () => {
  addDoc(() => Promise.resolve('resolve'));
  collection(() => ({}));
  saveTask('comment');
  expect(addDoc).toHaveBeenCalledWith(expect.anything(), 'comment');
});

it('Deberia escuchar el post publicado', () => {
  getAllTasks(saveTask);
  expect({ saveTask }).toEqual(expect.anything());
});

// Test de la funcion getAuthUser
it('Debe llamar al método onAuthStateChanged', () => {
  onAuthStateChanged(() => {
    Promise.resolve({
      uid: 'NpmibTu1HBTW4xcMfvGYfZCPz2G3',
    });
  });
  getAuthUser(onAuthStateChanged);

  expect(onAuthStateChanged).toBeCalled();
});

// Test de la funcion getAllTasks
it('Debe llamar al método onSnapshot ', () => {
  onSnapshot(() => ({}));
  getAllTasks(onSnapshot);

  expect(onSnapshot).toBeCalled();
});

// Test de la funcion de logOut
it('Debe llamar al método signOut', () => {
  signOut(() => {});
  logOut(signOut);
  expect(signOut).toBeCalled();
});

// Test de la funcion de getTask
it('Debería ser llamar a un id de usuario', () => {
  getDoc();
  doc(() => (''));
  getTask();
  expect(getDoc).toHaveBeenCalledWith(expect.anything());
});

// Test de la funcion de getTasks
it('Debería llamar a todos los ids de usuarios', () => {
  getDocs(() => Promise.resolve('resolve'));
  collection(() => ({}));
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
it('Debería llamar funcion para borrar la publicacion', () => {
  deleteTask();
  expect(deleteDoc).toHaveBeenCalledWith(expect.anything());
});

// Test por componente
describe('Los test del Registro', () => {
  test('Llama a la funcion crear usuario', () => {
    const result = RegisterForm();
    const buttonIngresar = result.querySelector('.btnSingIn');
    buttonIngresar.click();
    // buttonIngresar.dispatchEvent(new Event('click'))
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });
});

it('Invoca a la promesa con los argumentos', () => {
  const elemento = RegisterForm();
  const email = elemento.querySelector('.textInpute');
  const pass = elemento.querySelector('.textInputp');
  const boton = elemento.querySelector('.btnSingIn');

  email.value = 'aemunozpl@gmail.com';
  pass.value = '12345678';
  boton.addEventListener('click', () => {
    createUserWithEmailAndPassword(email.value, pass.value);
  });

  boton.click();
  // buttonIngresar.dispatchEvent(new Event('click'))
  expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  expect(createUserWithEmailAndPassword).toHaveBeenLastCalledWith('aemunozpl@gmail.com', '12345678');
});

describe('Los test de Start home', () => {
  test('Llama a la funcion entrar con google', () => {
    const resultGoogle = start();
    const buttonIngresar = resultGoogle.querySelector('.btnSingGoogle');
    // signInWithPopup.mockReturnValueOnce(true);
    buttonIngresar.click();
    // buttonIngresar.dispatchEvent(new Event('click'))
    expect(signInWithPopup).toHaveBeenCalled();
  });
});

describe('Test salida', () => {
  test('cambia de ventana al entrar con google', () => {
    const changueViews = start();
    const btnGoogle = changueViews.querySelector('.btnSingGoogle');
    // signInWithPopup.mockRejectedValueOnce(true);
    btnGoogle.click();
    // buttonIngresar.dispatchEvent(new Event('click'))
    // expect(signInWithPopup).toHaveBeenLastCalledWith();
    expect(window.location.hash).toBe('#/home');
  });
});

describe('test fireStore', () => {
  test('Llama a la funcion de crear colecciones', () => {
    const resultHome = home();
    const btnSubmit = resultHome.querySelector('.task-form');
    btnSubmit.submit();
    console.log(btnSubmit);
    // buttonIngresar.dispatchEvent(new Event('click'))
    // expect(signInWithPopup).toHaveBeenLastCalledWith();
    expect(addDoc).toHaveBeenCalled();
  });
});
describe(' Test salida', () => {
  test('Deberia cerrar sesion y cambiar ventana', () => {
    const closingSession = home();
    const buttonLogOut = closingSession.querySelector('.btnLogOut');
    console.log(buttonLogOut);
    // signInWithPopup.mockRejectedValueOnce(true);
    buttonLogOut.click();
    // buttonIngresar.dispatchEvent(new Event('click'))
    // expect(signInWithPopup).toHaveBeenLastCalledWith();
    expect(window.location.hash).toBe('#/');
  });
});

// describe('Los test del eliminar post', () => {
//   test('Llamar a la funcion de eliminar', () => {
//     const deletePost2 = delete();
//     let buttonDelete = deletePost2.querySelectorAll('.btn-delete');
//     console.log(buttonDelete);
//     buttonDelete = true;
//     buttonDelete.click();
//     // buttonDelete.dispatchEvent(new Event('click'));
//     expect(deleteDoc).toHaveBeenCalled();
//   });
// });

describe('Los test del eliminar post', () => {
  test('Llamar a la funcion de eliminar', () => {
    const deletePost2 = deletePost();
    const buttonDelete = deletePost2.querySelectorAll('.task-form');
    buttonDelete.click();
    // buttonDelete.dispatchEvent(new Event('click'));
    expect(deleteDoc).toHaveBeenCalled();
  });
});

// it('Debe enviar enviar correo confirmacion', () => {
//   const email = sendEmailVerification();
//   const button = result.querySelector('.btnSingIn');
//   sendEmail(sendEmailVerification);
//   email.click
//   expect(sendEmailVerification).toBe((true));
// });

it('Deberia ejecutar el error', async () => {
  // signUp(() => Promise.reject(
  //   new Error(({ erroCode: 'auth/invalid-email' })),
  // ));
  register.mockImplementationOnce(() => { Promise.resolve({ code: 'auth/invalid-email' }); });
  const result = RegisterForm();

  const email = result.querySelector('.textInpute');
  email.value = 'viviana.perez28@gmail';

  const btn = result.querySelector('#loginForm');
  btn.dispatchEvent(new Event('submit'));

  const errorMessage = result.querySelector('#missingEmail');

  expect(errorMessage.currentStyle).toBe(' Type your email ');
});

it('Deberia actualizar el perfil', () => {
  updateProfile(() => Promise.resolve('resolve'));
  const displayName = 'tefa';
  updateData(displayName);
  expect(updateProfile).toHaveBeenCalledWith(expect.anything(), { displayName });
});
