import { signIn } from '../lib/firebase';

export default () => {
  const login = `
  <div class = "containerRow">
  <div class="containerColumn">
  <a class= "buttonback" href="#/">Back</a>
  <figure>
  <img class = "image" src="../Media/LogoR.png" alt="logo">
  </figure>
  <h2 class= "textIntro"> GIVE <br> SHARE <br> ASK <br> GRATITUDE</h2>
  </div>
  <div class="containerColumn" id="columnRight">
  <form action="" id="loginForm">
  <label for="email">Email:</label><br> 
  <input type="email" id= "signinEmail" placeholder="Email"class="textEmail" required></input><br>
  <label for="password"> Password:</label><br>  
  <input type="password" id= "signinPassword" placeholder="**********"class="textPassword" required></input><br>
  <button type="submit" class="btnSingIn">Sing In</button>
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
    signIn(inputEmail.value, inputPassword.value);
  });
  return div;
};
