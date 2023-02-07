import {
  signUp, updateData, sendEmail, loginGoogle, logOut, signIn, sendPassword, saveTask, getAuthUser,
} from '../lib/firebase.js';

export const register = (email, password, userName, cellPhone) => new Promise((resolve, reject) => {
  signUp(email, password)
    .then((userCredential) => {
      // Signed in
      console.log('Aqui SignUp Ok');
      updateData(userName, cellPhone).then((resolves) => {
        // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
        console.log(resolves);
        console.log(userCredential.user);
        console.log('Aqui Update OK');
        sendEmail().then(() => {
          alert('Confirmation email has been sent');
          resolve(true);
        });
      });

      // const user = userCredential.user;
    })
    .catch((error) => {
      reject(error);
    });
});

// Funcion de Google
export const startGoogle = () => new Promise((resolve, reject) => {
  loginGoogle()
    .then((result) => {
      console.log(result);
      resolve(true);
      // This gives you a Google Access Token. You can use it to access the Google API.
      // The signed-in user info.
    }).catch((error) => {
      console.error(error);
      // Handle Errors here.
      reject(error);
      // The AuthCredential type that was used.
    });
});

// Funcion de cerrar sesión
export const endSession = () => {
  logOut()
    .then(() => {
    // Sign-out successful.
    }).catch((error) => {
      console.error(error);
    // An error happened.
    });
};

export const startSignIn = (email, password) => new Promise((resolve, reject) => {
  signIn(email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      alert(`hi ${user.displayName}`);
      resolve(true);
    })
    .catch((error) => {
      reject(error);
    });
});

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
      console.log(errorCode);
      console.log(errorMessage);
    });
};
export const creatingPost = (title, description) => saveTask(title, description);
