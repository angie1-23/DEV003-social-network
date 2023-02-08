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
      html += `<div class="boxContainer">
    <div class = "headerPost">
    <div class="column">
    <img class = "imageUser" src="${task.photo}" alt="user">
    </div>
    <div class="column" id="nameWeb">
    <p>${task.name}</p>
    <p>${task.email}</p>
    </div>
    <div class="column">
    <button class="btn-delete" data-id="${doc.id}"> X </buttton>
    </div>
    </div><br>
    <div class="linepost"></div><br>
    <h3 class="tittlepost">${task.title}</h3>
    <p class="descriptiontext">${task.description}</p><br>
    <div class="linepost"></div><br>
    ${auth.currentUser.uid === task.uid ? `<button class="btn-edit" data-id="${doc.id}"> Edit</buttton>` : ''}
    <button class="btn-comment" data-id="${doc.id}">Comment</buttton>
    <button class="btn-Like" data-id="${doc.id}"  
    <span class='icon'><i class="material-icons ${task.likes ? 'true' : 'false'}">favorite</i>
    </span>
    <span class="count">${task.likes.length}</span> 
    </button>
 </div>`;
      tasksContainer.innerHTML = html;
      const btnsEdit = tasksContainer.querySelectorAll('.btn-edit');
      // const taskForm = div.querySelector('.task-form');
      // let editStatus = false;
      // const id = '';
      btnsEdit.forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.id;
          // console.log(edit.data());
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
          <h2 class="tittleedit"> Edit your post here</h2>
            <textarea required type='text' class='newTitle'>${title}</textarea>
            <textarea required type='text' class='newPost'>${description}
          </textarea>
          <button type='button' class='publish'>Editar</button>
          `;
            tasksContainer.innerHTML = htmlmodal;

            const comentEdit = tasksContainer.querySelector('.newPost');
            const comentTitle = tasksContainer.querySelector('.newTitle');
            const buttonEdit = tasksContainer.querySelector('.publish');
            buttonEdit.addEventListener('click', () => {
              containerHome.style.display = 'block';
              const newPost = {};
              const newTitle = {};
              newPost.description = comentEdit.value;
              newTitle.title = comentTitle.value;
              updateTask(id, newTitle, newPost);
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
