import { startGoogle } from '../controler/controlerReg.js';

export default () => {
  const viewStart = `
<div class = "containerRow">
<div class="containerColumn" id="columnLeft">
<figure>
<img class = "image" src="../Media/LogoR.png" alt="logo">
</figure>
<h2 class= "texthome">Welcome to Recycle 24/7 ! <br> We believe buying less and sharing more  is the future of sustainable development!</h2>
</div>
<div class="line"> </div>
<div class="containerColumn" id="columnRight">
<img class = "imagestart" src="../Media/secondhand.gif" alt="start"><br><br>
<button type="submit" class="btnSingGoogle"> <img class = "googleButton" src="../Media/btn_google.png" alt="botonGoogle" ></button><br><br>
<a class= "button" id="buttonSignUp" href="#/email">Sing up with email</a><br><br>
<p class="textInfo" > Already have  an account</p> <br>
<a class= "button" href="#/login">Log in</a><br><br>
</div>
</div>
`;

  const divStart = document.createElement('div');
  divStart.innerHTML = viewStart;
  divStart.classList.add('introstart');
  const btnSingGoogle = divStart.querySelector('.btnSingGoogle');
  btnSingGoogle.addEventListener('click', () => {
    startGoogle()
      .then((success) => {
        console.log(success);
        console.log('Aqui Cambio de vista Ok');
        window.location.hash = '#/home';
      })
      .catch((error) => {
        console.log(error);
      });
    //  window.location.hash = '#/loader';
  });
  return divStart;
};
