import {
  getAllTasks, auth, getTask, updateTask,
} from '../lib/firebase.js'; // importamos funciones de firebase
import { deletePost } from './delete.js'; // importamos la funcion de borrar post
import { likePost } from './likes.js'; // importamos la funcion de dar like

export const Post = (div) => {
  // llamamos a la funcion de firebase que contiene la coleccion de los post
  getAllTasks((result) => {
    const tasksContainer = div.querySelector('.task-container');
    let html = ''; // es el html vacio para llenarlo
    result.forEach((doc) => { // funcion para pintar cada uno de los post que se publiquen
      // variable donde guardamos toda la informacion de los usuarios de firebase
      const task = doc.data();
      // pintamos los post agregando uno por uno con +=
      html += `<div class="boxContainer">
    <div class = "headerPost">
    <div class="column1">
    ${task.photo !== null ? `<img class = "imageUser" src="${task.photo}" alt="user">` : '<i class="fa-solid fa-user usericon"></i>'}
    </div>
    <div class="column1" id="nameWeb">
    <p>${task.name}</p>
    <p>${task.email}</p>
    </div>
    <div class="column1">
    ${auth.currentUser.uid === task.uid ? `<button class="btn-delete" data-id="${doc.id}"> <i class="fa-sharp fa-solid fa-trash"></i></buttton> ` : '<img class = "imageSmallest" src="https://github.com/mafcht/DEV003-social-network/blob/v1.0/src/Media/logo.png?raw=true" alt="logo">'}
    </div>
    </div><br>
    <div class="linepost"></div><br>
    <h3 class="tittlepost">${task.title}</h3>
    <p class="descriptiontext">${task.description}</p><br>
    <div class="linepost"></div><br>
    <div class = "headerPost">
    <div class="column1">
    <button class="btn-Like" data-id="${doc.id}"  
    <span class='icon'><i class="fa-solid fa-heart" ${task.likes ? 'true' : 'false'}"></i>
    </span>
    <span class="count">${task.likes.length}</span> 
    </button>
    </div>
    <div class="column1">
   
    </div>
    <div class="column1">
 ${auth.currentUser.uid === task.uid ? `<button class="btn-edit" data-id="${doc.id}"> <i class="fa-solid fa-file-pen"></i></buttton>` : ''}
    </div>
    </div>
 </div>`;
      // creamos el nodo del contenedor
      tasksContainer.innerHTML = html;
      const btnsEdit = tasksContainer.querySelectorAll('.btn-edit');
      btnsEdit.forEach((btn) => { // funcion de editar para cada boton
        btn.addEventListener('click', () => {
          const id = btn.dataset.id;
          const containerHome = div.querySelector('.containerHome');
          // promesa para editar con funcion de firebase, trae solo 1 post
          getTask(id).then((promise) => {
            containerHome.style.display = 'none'; // escondemos el contenedor
            const description = promise.data().description;
            const title = promise.data().title;
            let htmlmodal = ''; // modal vacio
            htmlmodal = `
            <button class="buttonback2"> <img class = "buttonback" src="https://github.com/mafcht/DEV003-social-network/blob/v1.0/src/Media/backarrow.png?raw=true" alt="botonback" ></button>
            <img class = "imageSmall" src="https://github.com/mafcht/DEV003-social-network/blob/v1.0/src/Media/logo.png?raw=true" alt="logo">
            <h2 class="tittleedit"> Edit your post here</h2>
            <h2 class="textphone"> Are you GIVING or ASKING an item?</h2>
            <h2 class="textweb"> Please write if you are GIVING or ASKING an item?</h2>
            <textarea required type='text' class='newTitle'>${title}</textarea><br><br>
            <h2 class="textdescription">Please describe the item you are giving or asking in detail, for example: the size, the color, and the condition, etc. </h2><br>
            <h2 class="textdescription2">Please describe the item in detail. </h2>
            <textarea required type='text' class='newPost'>${description}
          </textarea><br>
          <button type='button' class='publish'>Edit</button>
          `;
            tasksContainer.innerHTML = htmlmodal; // pintamos modal on info

            const btnBackHome = tasksContainer.querySelector('.buttonback2');
            btnBackHome.addEventListener('click', () => {
              window.history.go(0); // para recargar la pagina
            });

            const comentEdit = tasksContainer.querySelector('.newPost');
            const comentTitle = tasksContainer.querySelector('.newTitle');
            const buttonEdit = tasksContainer.querySelector('.publish');
            buttonEdit.addEventListener('click', () => {
              containerHome.style.display = 'block';
              const newPost = {};
              const newTitle = {};
              newPost.description = comentEdit.value;
              newTitle.title = comentTitle.value;
              updateTask(id, newTitle); // se actualizan los cambios del titulo
              updateTask(id, newPost); // se actualizan los cambios de la descripcion
            });
          });
        });
        deletePost(tasksContainer); // llevamos el parametro del contenedor a la funcion delete
        likePost(tasksContainer); // llevamos el parametro del contenedor a la funcion delete
        return Post; // regresa la vista para pintarlo en el contenedor
      });
    });
  });
};
