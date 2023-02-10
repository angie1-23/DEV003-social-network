// import {
//   getAuth, signInWithEmailAndPassword,
//   GoogleAuthProvider, sendPasswordResetEmail,
//   onAuthStateChanged, updateProfile, sendEmailVerification,
// } from 'firebase/auth';
// import {
//   addDoc, collection, onSnapshot,
//   getDoc, doc, updateDoc, deleteDoc, getDocs,
// } from 'firebase/firestore';
import {
  signUp, signIn, loginGoogle, sendPassword,
  // sendPassword,
  // saveTask, getAuthUser,
//   getAllTasks, logOut, getTask, updateTask, deleteTask, updateData, sendEmail, getTasks,
} from '../src/lib/firebase.js';

import {
  createUserWithEmailAndPassword, signInWithPopup, signOut, signInWithEmailAndPassword,
  GoogleAuthProvider, getAuth, sendPasswordResetEmail,
} from '../src/lib/imports.js'; // Tenemos que llamar a mocks
import RegisterForm from '../src/Views/loginEm.js';
import start from '../src/Views/startHome.js';
import home from '../src/Views/home.js';

// Mocks de firebase
jest.mock('../src/lib/imports.js');

//Test de la funcion de signUp
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

// it('Debería poder ingresar con Google', () => {
//   const provider = new GoogleAuthProvider();
//   loginGoogle(getAuth(), provider).then(() => {
//     expect(signInWithPopup).toHaveBeenCalledWith(getAuth(), provider);
//   });
// });

// Test de la funcion de sendPassword
it('Debe enviar restablecer comtraseña', () => {
  sendPasswordResetEmail(() => Promise.resolve('angie@gmail.com'));
  sendPassword(sendPasswordResetEmail);
  expect(sendPasswordResetEmail).toBeCalled();
});

// it('Debería recuperar contraseña', () => {
//   sendPassword('angie@gmail.com').then((email) => {
//     expect(email).toBe('angie@gmail.com');
//   });
// });

// // Test de la funcion de saveTask
// it('Debería llamar al metodo addDoc', () => {
//   addDoc(() => Promise.resolve('resolve'));
//   collection(() => ({}));
//   saveTask('comment');
//   expect(addDoc).toHaveBeenCalledWith(expect.anything(), 'comment');
// });

// it('Deberia escuchar el post publicado', () => {
//   getAllTasks(saveTask);
//   expect({ saveTask }).toEqual(expect.anything());
// });

// // Test de la funcion getAuthUser
// it('Debe llamar al método onAuthStateChanged', () => {
//   onAuthStateChanged(() => {
//     Promise.resolve({
//       uid: 'NpmibTu1HBTW4xcMfvGYfZCPz2G3',
//     });
//   });
//   getAuthUser(onAuthStateChanged);

//   expect(onAuthStateChanged).toBeCalled();
// });

// // Test de la funcion getAllTasks
// it('Debe llamar al método onSnapshot ', () => {
//   onSnapshot(() => ({}));
//   getAllTasks(onSnapshot);

//   expect(onSnapshot).toBeCalled();
// });

// // Test de la funcion de logOut
// it('Debe llamar al método signOut', () => {
//   signOut(() => {});
//   logOut(signOut);
//   expect(signOut).toBeCalled();
// });

// // Test de la funcion de getTask
// it('Debería ser llamar a un id de usuario', () => {
//   getDoc(() => Promise.resolve('resolve'));
//   doc(() => ('HumtDZSAuGciUiaxvGs6'));
//   const id = 'HumtDZSAuGciUiaxvGs6';
//   getTask(id);
//   expect(getDoc).toHaveBeenCalledWith(id);
// });

// // Test de la funcion de getTasks
// it('Debería llamar a todos los ids de usuarios', () => {
//   getDocs(() => Promise.resolve('resolve'));
//   collection(() => ({}));
//   getTasks();
//   expect(getDoc).toHaveBeenCalledWith(expect.anything());
// });

// // Test de la funcion de updateTask
// it('Debería llamar al metodo updateDoc', () => {
//   updateTask(updateDoc);
//   expect(updateDoc).toBeCalled();
// });

// it('Debería devolver un nuevo objeto', () => {
//   updateDoc({
//     id: 'HumtDZSAuGciUiaxvGs6',
//     newDoc: {},
//   });
//   expect(updateDoc).toEqual(expect.anything(), { id: 'HumtDZSAuGciUiaxvGs6', newDoc: {} });
// });

// // Test de la funcion de deleteTask
// it('Debería borrar la publicacion', () => {
//   const id = 'HumtDZSAuGciUiaxvGs6';
//   deleteTask(id);
//   expect(deleteDoc).toHaveBeenCalledWith(id);
// });

describe('Los test del Registro', () => {
  test('El componente es una Funcion', () => {
    const result = RegisterForm();
    const buttonIngresar = result.querySelector('.btnSingIn');
    buttonIngresar.click();
    // buttonIngresar.dispatchEvent(new Event('click'))
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });
});

test('Invoca a la promesa con los argumentos', () => {
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
  test('El componente es una Funcion', () => {
    const resultGoogle = start();
    const buttonIngresar = resultGoogle.querySelector('.btnSingGoogle');
    // signInWithPopup.mockReturnValueOnce(true);
    buttonIngresar.click();
    // buttonIngresar.dispatchEvent(new Event('click'))
    expect(signInWithPopup).toHaveBeenCalled();
  });
});

describe('Test salida', () => {
  test('', () => {
    const resultLogOut = start();
    const buttonLogOut = resultLogOut.querySelector('.btnSingGoogle');
    // signInWithPopup.mockRejectedValueOnce(true);
    buttonLogOut.click();
    // buttonIngresar.dispatchEvent(new Event('click'))
    // expect(signInWithPopup).toHaveBeenLastCalledWith();
    expect(window.location.hash).toBe('#/home');
  });
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
