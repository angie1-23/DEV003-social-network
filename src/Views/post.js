import {
  getAllTasks, auth, getTask, updateTask,
} from '../lib/firebase.js';
import { deletePost } from './delete.js';
import { likePost } from './likes.js';

// getTasks, update,
// const querySnapshot = getTasks();
export const Post = (div) => {
  getAllTasks((result) => {
    const tasksContainer = div.querySelector('.task-container');
    console.log(tasksContainer);
    let html = '';
    // console.log(querySnapshot);
    result.forEach((doc) => {
      const task = doc.data();
      console.log(doc.data());
      console.log(tasksContainer);
      console.log(task.photo !== null);
      html += `<div class="boxContainer">
    <div class = "headerPost">
    <div class="column1">
    ${task.photo !== null ? `<img class = "imageUser" src="${task.photo}" alt="user">` : '<img class = "imageUser" src="https://github.com/mafcht/DEV003-social-network/blob/v1.0/src/Media/usericon.png?raw=true" alt="logo">'}
    </div>
    <div class="column1" id="nameWeb">
    <p>${task.name}</p>
    <p>${task.email}</p>
    </div>
    <div class="column1">
    ${auth.currentUser.uid === task.uid ? `<button class="btn-delete" data-id="${doc.id}"> <i class="fa-sharp fa-solid fa-trash"></i></buttton> ` : ''}
    </div>
    </div><br>
    <div class="linepost"></div><br>
    <h3 class="tittlepost">${task.title}</h3>
    <p class="descriptiontext">${task.description}</p><br>
    <div class="linepost"></div><br>
    <div class = "headerPost">
    <div class="column1">
    <button class="btn-Like" data-id="${doc.id}"  
    <span class='icon'><i class="material-icons ${task.likes ? 'true' : 'false'}">favorite</i>
    </span>
    <span class="count">${task.likes.length}</span> 
    </button>
    </div>
    <div class="column1">
    ${auth.currentUser.uid === task.uid ? `<button class="btn-edit" data-id="${doc.id}"> <i class="fa-solid fa-file-pen"></i></buttton>` : ''}
    </div>
    <div class="column1">

    </div>
    </div>
 </div>`;
      /* <button class="btn-comment" data-id="${doc.id}">Comment</buttton> */
      tasksContainer.innerHTML = html;
      const btnsEdit = tasksContainer.querySelectorAll('.btn-edit');
      // const taskForm = div.querySelector('.task-form');
      // let editStatus = false;
      // const id = '';
      btnsEdit.forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.id;
          // console.log(id);
          const containerHome = div.querySelector('.containerHome');
          console.log(id);
          getTask(id).then((promise) => {
            containerHome.style.display = 'none';

            const description = promise.data().description;
            const title = promise.data().title;
            console.log(title);
            console.log(promise);
            let htmlmodal = '';
            htmlmodal = `
            <button class="buttonback2"> <img class = "buttonback" src="https://github.com/mafcht/DEV003-social-network/blob/v1.0/src/Media/backarrow.png?raw=true" alt="botonback" ></button>
            <img class = "imageSmall" src="https://github.com/mafcht/DEV003-social-network/blob/v1.0/src/Media/logo.png?raw=true" alt="logo">
            <h2 class="tittleedit"> Edit your post here  ${task.name}</h2>
            <h2 class="textphone"> Are you GIVING or ASKING an item?</h2>
            <h2 class="textweb"> Please write if you are GIVING or ASKING an item?</h2>
            <textarea required type='text' class='newTitle'>${title}</textarea><br><br>
            <h2 class="textdescription">Please describe the item you are giving or asking in detail, for example: the size, the color, and the condition, etc. </h2><br>
            <h2 class="textdescription2">Please describe the item in detail. </h2>
            <textarea required type='text' class='newPost'>${description}
          </textarea><br>
          <button type='button' class='publish'>Editar</button>
          `;
            tasksContainer.innerHTML = htmlmodal;

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
              updateTask(id, newTitle);
              updateTask(id, newPost);
              // const task = edit.data();
              // taskForm['post-information'].value = task.title;
              // taskForm.description.value = task.description;
              // editStatus = true;
              // id = doc.id;
            });
            // taskForm['btn-task-save'].innerText = 'Update';
          });
        });
        deletePost(tasksContainer);
        likePost(tasksContainer);
        return Post;
      });
    });
  });
};
