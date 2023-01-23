// import { ingresar } from '../lib/firebase';

export default () => {
  const login = `
  <div class="containerStart">
  <a class= "button" href="#/">Back</a>
  <figure>
  <img class = "image" src="../Media/LogoR.png" alt="logo">
  </figure>
  <h2 class= "textIntro"> GIVE <br> SHARE <br> ASK <br> GRATITUDE</h2>
  <form action="" id="loginForm">
  <label for="email">Email:</label>  
  <input type="email" id= "signinEmail" placeholder="Email"class="textEmail" required></input><br>
  <label for="password"> Password:</label> 
  <input type="password" id= "signinPassword" placeholder="**********"class="textPassword" required></input><br>
  <button type="submit" class="btnSingIn">Sing In</button>
  </form>
  <a class= "button" id="homePage" href="#/home">Sing In</a>
  </div>
  `;
  const div = document.createElement('div');
  div.innerHTML = login;
  const inputEmail = div.querySelector('.textEmail');
  const inputPassword = div.querySelector('.textPassword');
  const buttonIngresar = div.querySelector('.btnSingIn');
  // Funcion para ingresar con correo

  buttonIngresar.addEventListener('click', () => {
    ingresar(inputEmail.value, inputPassword.value);
  });
  return div;
};

/* <button type="button" class="btn btn-info" id="googleLogin">Google</button>
<button type="button" class="btn btn-primary" id="facebookLogin">Facebook</button> */

