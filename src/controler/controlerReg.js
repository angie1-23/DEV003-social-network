// eslint-disable-next-line import/no-extraneous-dependencies
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {
  signUp, updateData, sendEmail, loginGoogle, logOut, signIn, sendPassword, saveTask,
} from '../lib/firebase.js'; // importamos funciones de firebase para crear promesas y mas funciones

export const register = (email, password, userName, cellPhone) => new Promise((resolve, reject) => {
  signUp(email, password)
    .then(() => { // promesa que actualiza la data, manda el mail de confirmacion y muestra un alert
      updateData(userName, cellPhone).then(() => {
        sendEmail().then(() => {
          Swal.fire({
            title: 'Confirmation email has been sent',
            text: '',
            icon: '',
            confirmButtonText: 'Accept',
          });
          resolve(true);
        });
      });
    })
    .catch((error) => {
      reject(error);
    });
});

// Funcion de Google
export const startGoogle = () => new Promise((resolve, reject) => {
  loginGoogle()
    .then((result) => {
      resolve(true);
      // This gives you a Google Access Token. You can use it to access the Google API.
      // The signed-in user info.
      return result;
    }).catch((error) => {
      reject(error);
      // The AuthCredential type that was used.
    });
});

// Funcion de cerrar sesión
export const endSession = () => new Promise((resolve, reject) => {
  logOut()
    .then(() => {
      resolve(true);
      // Sign-out successful.
    }).catch((error) => {
      reject(error);
      // An error happened.
    });
});

// Funcion de iniciar sesion cuando ya tienes una cuenta
export const startSignIn = (email, password) => new Promise((resolve, reject) => {
  signIn(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // sweet alert de bienvenida
      Swal.fire({
        title: `Welcome ${user.displayName} !`,
        text: '',
        icon: '',
        confirmButtonText: 'Accept',
      });
      resolve(true);
    })
    .catch((error) => {
      reject(error);
    });
});

// Funcion para restablecer contraseña
export const resetPassword = (email) => new Promise((resolve, reject) => {
  sendPassword(email)
    .then(() => {
      // sweet alert que indica que se ha enviado correo
      Swal.fire({
        title: 'Password reset email sent!',
        text: '',
        icon: '',
        confirmButtonText: 'Accept',
      });
      resolve(true);
    })
    .catch((error) => {
      reject(error);
    });
});

// Funcion para crear y guardar el post
export const creatingPost = (title, description) => saveTask(title, description);
