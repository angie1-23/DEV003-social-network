import { signUp, updateData,sendEmail } from '../lib/firebase.js';
// loginGoogle
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
// const register = () => {
//     register(email,password).then().catch() }

// export const signInGoogle = () => {
//   loginGoogle()
//     .then((result) => {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       // Redirecciona a la pagina de home
//       window.location.hash = '#/home';
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       // The signed-in user info.
//       const user = result.user;
//       console.log(token, user);
//       // ...
//     }).catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.customData.email;
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       // ...
//     });
// };
