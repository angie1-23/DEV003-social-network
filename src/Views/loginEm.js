import { register } from '../lib/firebase.js';

// Function para exportar lo que se va a visualizar en registrar con Email
export default () => {
  const viewLoginEm = `
<div class="containerStart">
<a class= "button" href="#/">Back</a>
<figure>
<img class = "image" src="../Media/LogoR.png" alt="logo">
</figure>
<h2 class= "textIntro"> Thanks for being part of our community and share with us, help us fill your personal information.<br> Register! </h2>
<spam class="displayNone" id="somethingWrong">Something went wrong </spam>
<input type="text" placeholder="Username"class="textInputUser" id= "text"></input><br>
<input type="text" placeholder="Full Name"class="textInputName"></input><br>
<input type="text" placeholder="Cell Phone"class="textInputPhone"></input><br>
<input type="text" placeholder="Location"class="textInputLocation"></input><br>
<input type="text" placeholder="Email"class="textInpute"></input><br>
<spam class="displayNone" id="missingEmail"> Type your email </spam>
<spam class="displayNone" id="loginEmailNull">Invalid email</spam>
<spam class="displayNone" id="loginEmailInUse">Email already in use</spam>
<input type="text" placeholder="Password"class="textInputp"></input><br>
<spam class="displayNone" id="registerWeakPassword">Password should be at least 6 characters</spam>
<spam class="displayNone" id="missingPassword">Type a password </spam>
<button type="submit" class="btnSingIn"> Register </button>
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
  // const userName = div.querySelector('.textInputUser');
  // const fullName = div.querySelector('.textInputName');
  // const cellPhone = div.querySelector('.textInputPhone');
  // const location = div.querySelector('.textInputLocation');
  const buttonIngresar = div.querySelector('.btnSingIn');
  buttonIngresar.addEventListener('click', () => {
    register(
      inputEmail.value,
      inputPasswordEmail.value,
      // userName.value,
      // fullName.value,
      // cellPhone.value,
      // location.value,
    );
  });
  return div;
};
