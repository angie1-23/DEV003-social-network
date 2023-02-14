import { endSession, creatingPost } from '../controler/controlerReg.js';
import { auth } from '../lib/firebase.js';
import { Post } from './post.js';

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

  // Traer la informacion
  const taskForm = div.querySelector('.task-form');
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submit');
    const title = div.querySelector('.task-title');
    const description = div.querySelector('.task-description');
    const photo = auth.currentUser.photoURL;
    const newPost = {
      name: auth.currentUser.displayName,
      email: auth.currentUser.email,
      title: title.value,
      description: description.value,
      uid: auth.currentUser.uid,
      photo,
      likes: [],
    };
    creatingPost(newPost);
    // console.log(newPost);
    taskForm.reset();
  });
  console.log('Hasta aqui');

  const btnLogOut = div.querySelector('.btnLogOut');
  btnLogOut.addEventListener('click', () => {
    endSession();
    window.location.hash = '#/';
  });
  Post(div);
  return div;
};
