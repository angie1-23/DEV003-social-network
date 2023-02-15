import { endSession, creatingPost } from '../controler/controlerReg.js';
import { auth } from '../lib/firebase.js';
// se importa de firebase para poder traer los valores de la autentificacion de cada usuario
import { Post } from './post.js';
// importamos funciones de diferentes archivos para utilizarlas en la vista de home

export default () => {
  const viewHome = `
  <div class = "containerHome">
  <div class="header">
  <div class="column">
  <button type="submit" class="btnLogOut" id="logOut"> Log Out </button> <br>
  </div>
  <div class="column">
  <figure>
  <img class = "imageSmall" src="https://github.com/mafcht/DEV003-social-network/blob/v1.0/src/Media/logo.png?raw=true" alt="logo">
  </figure>
  </div>
  <div class="column">
  </div>
  </div>
  <div class = "containerdotted"><br>
  <form class="task-form">
  <h2 class="textphone"> Are you GIVING or ASKING an item?</h2>
  <h2 class="textweb"> Please write if you are GIVING or ASKING an item?</h2>
  <input class="task-title" id="post-information" placeholder="Type here..." required></input><br><br>
  <h2 class="textdescription">Please describe the item you are giving or asking in detail, for example: the size, the color, and the condition, etc. </h2>
  <h2 class="textdescription2">Please describe the item in detail. </h2>
  <textarea id="description" rows="3" class="task-description" placeholder="Type here..." required></textarea><br><br>
  <button type="submit" class="btnPost" id ="btn-task-save">Post</button> <br><br>
  </form>
  </div><br><br>
  </div>
  <div class="task-container"> 
  </div>
  `;
  const div = document.createElement('div');
  div.innerHTML = viewHome;
  div.classList.add('containerHome');

  // Traemos la informacion
  const taskForm = div.querySelector('.task-form');
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = div.querySelector('.task-title');
    const description = div.querySelector('.task-description');
    const photo = auth.currentUser.photoURL;
    const newPost = { // creamos un objeto para guardar la informacion de los usuarios en firebase
      name: auth.currentUser.displayName,
      email: auth.currentUser.email,
      title: title.value,
      description: description.value,
      uid: auth.currentUser.uid,
      photo,
      likes: [],
    };
    // aqui pintamos la informacion de cada post con ayuda de la funcion del controlador
    creatingPost(newPost);
    taskForm.reset(); // se limpian los inputs del post
  });

  // Funcion para cerrar sesion
  const btnLogOut = div.querySelector('.btnLogOut');
  btnLogOut.addEventListener('click', () => {
    endSession(); // funcion del controlador que finaliza la sesion
    window.location.hash = '#/'; // cambia de pagina al starthome
  });
  Post(div); // mandamos el div a post para que encuentre el div donde se van a pintar los post
  return div; // regresamos el div de la vista que se va a pintar en el contenedor
};
