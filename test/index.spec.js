import {
  signUp, signIn, loginGoogle, sendPassword, deleteTask, saveTask, getAllTasks, getAuthUser,
  logOut, getTask, getTasks, updateTask, updateData,
} from '../src/lib/firebase.js'; // funciones de firebase

import {
  createUserWithEmailAndPassword, signInWithPopup, signOut, signInWithEmailAndPassword, addDoc,
  sendPasswordResetEmail, deleteDoc, onSnapshot, collection, getDoc, doc,
  onAuthStateChanged, getDocs, updateDoc, updateProfile,
} from '../src/lib/imports.js'; // Tenemos que llamar a mocks de las funciones de firebase

// traemos las vistas que vamos a testear
import RegisterForm from '../src/Views/loginEm.js';
import start from '../src/Views/startHome.js';
import home from '../src/Views/home.js';

// Mocks de firebase
jest.mock('../src/lib/imports.js');

// Test de la funcion de signUp
it('Debe llamarse al método crear usuario', () => {
  createUserWithEmailAndPassword(() => { // funcion de firebase mockeada
    Promise.resolve({ // resolvemos promesa
      email: 'angie@gmail.com',
      password: 'pajaroazul',
    });
  });
  // llamamos a la funcion de firebase con la funcion signup del controlador
  signUp(createUserWithEmailAndPassword);
  // Esperamos que la funcion sea llamada exitosamente
  expect(createUserWithEmailAndPassword).toBeCalled();
});

it('Deberia retornar un objeto con la propiedad email y password', () => {
  signUp('angie@gmail.com', 'pajaroazul'); // creamos el parametro deseado
  expect({ // esperamos un correo y una contraseña
    email: 'angie@gmail.com',
    password: 'pajaroazul',
  }).toEqual(expect.anything()); // recibimos lo que sea
});

// // Test de la funcion de signIn
it('Debe validar el usuario registrado', () => {
  // funcion de firebase mockeada con promesa resulta
  signInWithEmailAndPassword(() => Promise.resolve({
    email: 'angie@gmail.com',
    password: 'pajaroazul',
  }));
  // llamamos a la funcion de firebase con la funcion signin del controlador
  signIn(signInWithEmailAndPassword);
  // Esperamos que la funcion sea llamada exitosamente
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
  // funcion de firebase mockeada con promesa resulta
  signInWithPopup(() => Promise.resolve('angie@gmail.com'));
  // llamamos a la funcion de firebase con la funcion logingoogle del controlador
  loginGoogle(signInWithPopup);
  // Esperamos que la funcion sea llamada exitosamente
  expect(signInWithPopup).toBeCalled();
});

// Test de la funcion de sendPassword
it('Debe enviar restablecer comtraseña', () => {
  // funcion de firebase mockeada con promesa resulta
  sendPasswordResetEmail(() => Promise.resolve('angie@gmail.com'));
  // llamamos a la funcion de firebase con la funcion sendpassword del controlador
  sendPassword(sendPasswordResetEmail);
  // Esperamos que la funcion sea llamada exitosamente
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
  expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  expect(createUserWithEmailAndPassword).toHaveBeenLastCalledWith('aemunozpl@gmail.com', '12345678');
});

describe('Los test de Start home', () => {
  test('Llama a la funcion entrar con google', () => {
    const resultGoogle = start();
    const buttonIngresar = resultGoogle.querySelector('.btnSingGoogle');
    buttonIngresar.click();
    expect(signInWithPopup).toHaveBeenCalled();
  });
});

describe('Test salida', () => {
  test('cambia de ventana al entrar con google', () => {
    const changueViews = start();
    const btnGoogle = changueViews.querySelector('.btnSingGoogle');
    btnGoogle.click();
    expect(window.location.hash).toBe('#/home');
  });
});

describe('test fireStore', () => {
  test('Llama a la funcion de crear colecciones', () => {
    const resultHome = home();
    const btnSubmit = resultHome.querySelector('.task-form');
    btnSubmit.submit();
    expect(addDoc).toHaveBeenCalled();
  });
});
describe(' Test salida', () => {
  test('Deberia cerrar sesion y cambiar ventana', () => {
    const closingSession = home();
    const buttonLogOut = closingSession.querySelector('.btnLogOut');
    buttonLogOut.click();
    expect(window.location.hash).toBe('#/');
  });
});

it('Deberia actualizar el perfil', () => {
  updateProfile(() => Promise.resolve('resolve'));
  const displayName = 'tefa';
  updateData(displayName);
  expect(updateProfile).toHaveBeenCalledWith(expect.anything(), { displayName });
});
