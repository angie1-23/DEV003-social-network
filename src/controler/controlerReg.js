// import  register  from '../lib/firebase.js';

// const controlReg = (register) => {
//     window.location.hash = '#/home';
//     // Traemos los ID de los spam loginem
//     const missingEmail = document.getElementById('missingEmail');
//     const loginNulo = document.getElementById('loginEmailNull');
//     const emailInUse = document.getElementById('loginEmailInUse');
//     const passwordWeak = document.getElementById('registerWeakPassword');
//     const missingPassword = document.getElementById('missingPassword');
//     const somethingWrong = document.getElementById('somethingWrong');

//     if (errorCode === 'auth/missing-email') {
//       missingEmail.style.display = 'block';
//       loginNulo.style.display = 'none';
//       emailInUse.style.display = 'none';
//     } else if (errorCode === 'auth/invalid-email') {
//       loginNulo.style.display = 'block';
//       missingEmail.style.display = 'none';
//       emailInUse.style.display = 'none';
//     } else if (error.code === 'auth/email-already-in-use') {
//       emailInUse.style.display = 'block';
//       missingEmail.style.display = 'none';
//       loginNulo.style.display = 'none';
//     } else if (error.code === 'auth/weak-password') {
//       passwordWeak.style.display = 'block';
//       missingPassword.style.display = 'none';
//     } else if (error.code === 'auth/internal-error') {
//       passwordWeak.style.display = 'none';
//       missingPassword.style.display = 'block';
//     } else if (error.code) {+
//       somethingWrong.style.display = 'block';
//     }
//   };