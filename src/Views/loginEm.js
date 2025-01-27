import { register } from '../controler/controlerReg.js'; // importamos funcion del controlador

// Function para exportar lo que se va a visualizar en registrar con Email
export default () => {
  const viewLoginEm = `
<div class = "containerRow">
<div class="containerColumn">
<a href="#/"> <img class = "buttonback" src="https://github.com/mafcht/DEV003-social-network/blob/v1.0/src/Media/backarrow.png?raw=true" alt="botonback" ></a>
<figure>
<img class = "image" src="https://github.com/mafcht/DEV003-social-network/blob/v1.0/src/Media/LogoR.png?raw=true" alt="logo">
</figure>
<p class= "textIntro"> IMPORTANT! <br>Here in Recycling 24/7 we share, we give, and receive FREELY.<br>We never sell, buy, rent or trade any item. </p>
<p class= "textIntroweb"> Thanks for being part of our community and share with us, help us fill your personal information.
IMPORTANT! <br>Here in Recycling 24/7 we share, we give, and receive FREELY.<br>We never sell, buy, rent or trade any item. </p>
</div>
<div class="line"> </div>
<div class="containerColumn" id="columnRight">
<h2>Please register here! </h2>
<form action="" id="loginForm">
<span class="displayNone" id="somethingWrong">Something went wrong </span>
<input type="text" placeholder="Username"class="textInputUser" id= "text"></input><br>
<input type="text" placeholder="Full Name"class="textInputName"></input><br>
<input type="text" placeholder="Cell Phone"class="textInputPhone"></input><br>
<input type="text" placeholder="Location"class="textInputLocation"></input><br>
<input type="text" placeholder="Email"class="textInpute" required></input><br>
<span class="displayNone" id="missingEmail"> Type your email </span>
<span class="displayNone" id="loginEmailNull">Invalid email</span>
<span class="displayNone" id="loginEmailInUse">Email already in use</span>
<input type="password" id= "signinPassword" placeholder="**********" class="textInputp" required></input><br>
<span class="displayNone" id="registerWeakPassword">Password should be at least 6 characters</span>
<span class="displayNone" id="missingPassword">Type a password </span> <br>
<button type="submit" class="btnSingIn"> Register </button> <br>
</form>
</div>
</div>
`;

  const div = document.createElement('div');
  div.innerHTML = viewLoginEm;
  div.classList.add('introEmail');
  const inputEmail = div.querySelector('.textInpute');
  const inputPasswordEmail = div.querySelector('.textInputp');
  const userName = div.querySelector('.textInputUser');
  const cellPhone = div.querySelector('.textInputPhone');
  const buttonIngresar = div.querySelector('.btnSingIn');
  // llamamos a la funcion register y guardamos los valores ingresados
  buttonIngresar.addEventListener('click', (e) => {
    e.preventDefault();
    register(
      inputEmail.value,
      inputPasswordEmail.value,
      userName.value,
      cellPhone.value,
    ).then((success) => {
      window.location.hash = '#/home';
      return success;
    })
      .catch((error) => {
        const errorCode = error.code;
        // llamamos a los elementos del span con id
        const missingEmail = document.getElementById('missingEmail');
        const loginNulo = document.getElementById('loginEmailNull');
        const emailInUse = document.getElementById('loginEmailInUse');
        const passwordWeak = document.getElementById('registerWeakPassword');
        const missingPassword = document.getElementById('missingPassword');
        const somethingWrong = document.getElementById('somethingWrong');
        // pintamos los errores con un span y los mostramos y escondemos
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
  return div; // regresamos el div de la vista que se va a pintar en el contenedor
};
