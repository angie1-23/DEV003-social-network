import {
  signUp, updateData, sendEmail, loginGoogle, logOut, signIn, sendPassword,
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
      alert('Confirmation email has been sent');

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
  signIn(email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
    })
    .catch((error) => {
    // console.error(error);
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      console.log(errorCode);
      // Traemos los ID de los spam loginem
      const missingEmail1 = document.getElementById('missingEmail1');
      const loginNulo1 = document.getElementById('loginEmailNull1');
      const missingPassword1 = document.getElementById('missingPassword1');
      const somethingWrong1 = document.getElementById('somethingWrong1');

      if (errorCode === 'auth/missing-email') {
        missingEmail1.style.display = 'block';
        loginNulo1.style.display = 'none';
      } else if (errorCode === 'auth/invalid-email') {
        loginNulo1.style.display = 'block';
        missingEmail1.style.display = 'none';
      } else if (error.code === 'auth/internal-error') {
        missingPassword1.style.display = 'block';
      } else if (error.code) {
        somethingWrong1.style.display = 'block';
      }
    });
};

// Funcion para restablecer contraseña
export const resetPassword = (email) => {
  sendPassword(email)
    .then(() => {
    // Password reset email sent!
      alert('Password reset email sent!');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
