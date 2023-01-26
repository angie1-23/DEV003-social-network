import { register } from '../controler/controlerReg.js';

// Function para exportar lo que se va a visualizar en registrar con Email
export default () => {
  const viewLoginEm = `
<div class = "containerRow">
<div class="containerColumn">
<a class= "buttonback" href="#/">Back</a>
<figure>
<img class = "image" src="../Media/LogoR.png" alt="logo">
</figure>
<h2 class= "textIntro"> Thanks for being part of our community and share with us, help us fill your personal information.<br> Register! </h2>
</div>
<div class="containerColumn">
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
<button type="submit" class="btnSingIn"> Register </button> <br>
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
  const buttonIngresar = div.querySelector('.btnSingIn');
  buttonIngresar.addEventListener('click', () => {
    register(
      inputEmail.value,
      inputPasswordEmail.value,
      userName.value,
      // fullName.value,
      cellPhone.value,
      // location.value,
    );
    window.location.hash = '#/home';
  });
  return div;
};
