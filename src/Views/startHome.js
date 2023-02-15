import { startGoogle } from '../controler/controlerReg.js'; // importamos funcion del controlador

export default () => { // puedes importar la funcion con cualquier nombre
  // pintamos en html con las comillas intertidas
  const viewStart = `
<div class = "containerRow">
<div class="containerColumn" id="columnLeft">
<figure>
<img class = "image" src="https://github.com/mafcht/DEV003-social-network/blob/v1.0/src/Media/LogoR.png?raw=true" alt="logo">
</figure>
<h2 class= "texthome">Welcome to Recycle 24/7 ! <br> We believe buying less and sharing more  is the future of sustainable development!</h2>
</div>
<div class="line"> </div>
<div class="containerColumn" id="columnRight">
<img class = "imagestart" src="https://github.com/mafcht/DEV003-social-network/blob/v1.0/src/Media/secondhand.gif?raw=true" alt="start"><br><br>
<button type="submit" class="btnSingGoogle"> <img class = "googleButton" src="https://github.com/mafcht/DEV003-social-network/blob/main/src/Media/btn_google.png?raw=true" ></button><br><br>
<a class= "button" id="buttonSignUp" href="#/email">Sing up with email</a><br><br>
<p class="textInfo" > Already have  an account</p> <br>
<a class= "button" href="#/login">Log in</a><br><br>
</div>
</div>
`;
  // creamos un nodo para poderlo retornar al final de la funcion
  const divStart = document.createElement('div');
  divStart.innerHTML = viewStart; // aqui lo pintamos en el html
  divStart.classList.add('introstart'); // aqui le damos un atributo
  const btnSingGoogle = divStart.querySelector('.btnSingGoogle'); // traemos al boton con su clase
  // funcion para que el boton cambie de hash y corra la funcion de startGoogle
  btnSingGoogle.addEventListener('click', () => {
    startGoogle() // funcion de inicializar con Google que viene del controlador
      .then((success) => { // si se resulte la promesa con exito realizara lo siguiente
        window.location.hash = '#/home'; // cambio de vista con hash
        return success;
      });
  });
  return divStart; // retorna el nodo para poder pontarlo en el contenedor del html
};
