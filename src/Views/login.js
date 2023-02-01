import { startSignIn, resetPassword } from '../controler/controlerReg.js';

export default () => {
  const login = `
  <div class = "containerRow">
  <div class="containerColumn">
  <a href="#/"> <img class = "buttonback" src="../Media/backarrow.png" alt="botonback" ></a>
  <figure>
  <img class = "image" src="../Media/LogoR.png" alt="logo">
  </figure>
  <h2 class= "textIntro"> GIVE <br> SHARE <br> ASK <br> GRATITUDE</h2>
  </div>
  <div class="line"> </div>
  <div class="containerColumn" id="columnRight">
  <form action="" id="loginForm">
  <spam class="displayNone" id="somethingWrong1">Something went wrong </spam>
  <label for="email">Email:</label><br> 
  <input type="email" id= "signinEmail" placeholder="Email"class="textEmail" required></input><br>
  <spam class="displayNone" id="missingEmail1"> Type your email </spam>
  <spam class="displayNone" id="loginEmailNull1">Invalid email</spam>  
  <label for="password"> Password:</label><br>  
  <input type="password" id= "signinPassword" placeholder="**********"class="textPassword" required></input><br>
  <spam class="displayNone" id="missingPassword1">Type a password </spam> <br>
  <spam class="displayNone" id="wrongPassword1">Wrong password </spam> <br>
  <spam class="displayNone" id="requestPassword1">Too many requests </spam> <br>
  <button type="submit" class="btnSingIn">Sing In</button><br><br>
  <button type="submit" class="buttonForgot"> Forgot your Password </button><br>
  </form>
  </div>
  </div>
  `;
  const div = document.createElement('div');
  div.innerHTML = login;
  const inputEmail = div.querySelector('.textEmail');
  const inputPassword = div.querySelector('.textPassword');
  const buttonIngresar = div.querySelector('.btnSingIn');
  // Funcion para ingresar con correo
  buttonIngresar.addEventListener('click', () => {
    startSignIn(inputEmail.value, inputPassword.value)
      .then((success) => {
        console.log(success);
        console.log('Aqui Cambio de vista Ok');
        window.location.hash = '#/home';
      })
      .catch((error) => {
        console.log(error);
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
        const wrongPassword1 = document.getElementById('wrongPassword1');
        const requestPassword1 = document.getElementById('requestPassword1');

        if (errorCode === 'auth/missing-email') {
          missingEmail1.style.display = 'block';
          loginNulo1.style.display = 'none';
        } else if (errorCode === 'auth/invalid-email') {
          loginNulo1.style.display = 'block';
          missingEmail1.style.display = 'none';
        } else if (errorCode === 'auth/wrong-password') {
          wrongPassword1.style.display = 'block';
          missingEmail1.style.display = 'none';
        } else if (errorCode === 'auth/too-many-requests') {
          requestPassword1.style.display = 'block';
          wrongPassword1.style.display = 'none';
          missingEmail1.style.display = 'none';
        } else if (errorCode === 'auth/internal-error') {
          missingPassword1.style.display = 'block';
        } else if (errorCode) {
          somethingWrong1.style.display = 'block';
        }
      });
  });
  const btnForgot = div.querySelector('.buttonForgot');
  btnForgot.addEventListener('click', () => {
    resetPassword(inputEmail.value);
  });
  return div;
};
