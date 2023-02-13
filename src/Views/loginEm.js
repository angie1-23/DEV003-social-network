import { register } from '../controler/controlerReg.js';

// Function para exportar lo que se va a visualizar en registrar con Email
export default () => {
  const viewLoginEm = `
<div class = "containerRow">
<div class="containerColumn">
<a href="#/"> <img class = "buttonback" src="../Media/backarrow.png" alt="botonback" ></a>
<figure>
<img class = "image" src="../Media/LogoR.png" alt="logo">
</figure>
<p class= "textIntro"> IMPORTANT! <br>Here in Recycling 24/7 we share, we give, and receive FREELY.<br>We never sell, buy, rent or trade any item. </p>
<p class= "textIntroweb"> Thanks for being part of our community and share with us, help us fill your personal information.
IMPORTANT! <br>Here in Recycling 24/7 we share, we give, and receive FREELY.<br>We never sell, buy, rent or trade any item. </p>
</div>
<div class="line"> </div>
<div class="containerColumn" id="columnRight">
<h2>Please register here! </h2>
<form action="" id="loginForm">
<spam class="displayNone" id="somethingWrong">Something went wrong </spam>
<input type="text" placeholder="Username"class="textInputUser" id= "text"></input><br>
<input type="text" placeholder="Full Name"class="textInputName"></input><br>
<input type="text" placeholder="Cell Phone"class="textInputPhone"></input><br>
<input type="text" placeholder="Location"class="textInputLocation"></input><br>
<input type="text" placeholder="Email"class="textInpute" required></input><br>
<spam class="displayNone" id="missingEmail"> Type your email </spam>
<spam class="displayNone" id="loginEmailNull">Invalid email</spam>
<spam class="displayNone" id="loginEmailInUse">Email already in use</spam>
<input type="password" id= "signinPassword" placeholder="**********" class="textInputp" required></input><br>
<spam class="displayNone" id="registerWeakPassword">Password should be at least 6 characters</spam>
<spam class="displayNone" id="missingPassword">Type a password </spam> <br>
<button type="submit" class="btnSingIn" onclick="myFunction()"> Register </button> <br>
</form>
</div>
</div>
`;
  /* <label></label>
<input type="text" placeholder="Confirm password"class="textInputC"></input><br></br> */

  const div = document.createElement('div');
  div.innerHTML = viewLoginEm;
  div.classList.add('introEmail');
  const inputEmail = div.querySelector('.textInpute');
  const inputPasswordEmail = div.querySelector('.textInputp');
  // const inputConfirm = div.querySelector('.textUnputC');
  const userName = div.querySelector('.textInputUser');
  // const fullName = div.querySelector('.textInputName');
  const cellPhone = div.querySelector('.textInputPhone');
  // const location = div.querySelector('.textInputLocation');
  // Funcion para usar el checkbox requerido
  // Checkbox: <input type="checkbox" id="myCheck" name="test"></input><br>
  // function myFunction() {
  //   div.querySelector('.myCheck').required = true;
  // }
  const buttonIngresar = div.querySelector('.btnSingIn');
  buttonIngresar.addEventListener('click', (e) => {
    e.preventDefault();
    register(
      inputEmail.value,
      inputPasswordEmail.value,
      userName.value,
      // fullName.value,
      cellPhone.value,
      // location.value,
    ).then((success) => {
      // console.log(success);
      // console.log('Aqui Cambio de vista Ok');
      window.location.hash = '#/home';
    })
      .catch((error) => {
        console.log(error.code);
        const errorCode = error.code;
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
        } else if (errorCode === 'auth/email-already-in-use') {
          emailInUse.style.display = 'block';
          missingEmail.style.display = 'none';
          loginNulo.style.display = 'none';
        } else if (errorCode === 'auth/weak-password') {
          passwordWeak.style.display = 'block';
          missingPassword.style.display = 'none';
        } else if (errorCode === 'auth/internal-error') {
          passwordWeak.style.display = 'none';
          missingPassword.style.display = 'block';
        } else if (errorCode) {
          somethingWrong.style.display = 'block';
        }
      });
  });
  return div;
};
