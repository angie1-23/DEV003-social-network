import {
  signUp, updateData, sendEmail, loginGoogle, logOut, signIn,
} from '../lib/firebase.js';
// const register = () => {
//     register(email,password).then().catch() }

export const register = (email, password, userName) => {
  signUp(email, password)
    .then((userCredential) => {
      // Signed in
      updateData(userName).then(() => {
        // console.log(userCredential.user);
      });
      sendEmail();
      alert('Hemos enviado a tu correo electrónico el enlace de confirmación');

      // const user = userCredential.user;

      // window.location.hash = '#/home';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      console.log(errorCode);
      // Traemos los ID de los spam loginem
      const missingEmail = document.getElementById('missingEmail');
      const loginNulo = document.getElementById('loginEmailNull');
      const emailInUse = document.getElementById('loginEmailInUse');
      const passwordWeak = document.getElementById('registerWeakPassword');
      const missingPassword = document.getElementById('missingPassword');
      const somethingWrong = document.getElementById('somethingWrong');

      if (errorCode === 'auth/missing-email') {
        missingEmail.style.display = 'block';
        loginNulo.style.display = 'none';
        emailInUse.style.display = 'none';
      } else if (errorCode === 'auth/invalid-email') {
        loginNulo.style.display = 'block';
        missingEmail.style.display = 'none';
        emailInUse.style.display = 'none';
      } else if (error.code === 'auth/email-already-in-use') {
        emailInUse.style.display = 'block';
        missingEmail.style.display = 'none';
        loginNulo.style.display = 'none';
      } else if (error.code === 'auth/weak-password') {
        passwordWeak.style.display = 'block';
        missingPassword.style.display = 'none';
      } else if (error.code === 'auth/internal-error') {
        passwordWeak.style.display = 'none';
        missingPassword.style.display = 'block';
      } else if (error.code) {
        somethingWrong.style.display = 'block';
      }
    });
};

// Funcion de Google
export const startGoogle = () => {
  loginGoogle()
    .then((result) => {
      console.log(result);
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

// Funcion de cerrar sesión
export const endSession = () => {
  logOut()
    .then(() => {
    // Sign-out successful.
    // window.location.hash = '#/';
    }).catch((error) => {
      console.error(error);
    // An error happened.
    });
};

export const startSignIn = (email, password) => {
  signIn(email, password).then((userCredential) => {
    // Signed in
    // window.location.hash = '#/home';
    const user = userCredential.user;
    // ...
  })
    .catch((error) => {
      console.error(error);
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
