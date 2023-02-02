import { endSession, creatingPost } from '../controler/controlerReg.js';
import {
  getTasks, getAllTasks, deleteTask, getTask, updateTask, updateData,
} from '../lib/firebase.js';

export default () => {
  const viewHome = `
  <div class = "containerHome">
  <button type="submit" class="btnLogOut" id="logOut"> Log Out </button> <br></br>
  <figure>
  <img class = "imageSmall" src="../Media/LogoR.png" alt="logo">
  </figure>
  <form class="task-form">
  <h2> Please write if you are GIVING or ASKING an item!</h2>
  <input class="task-title" id="post-information" placeholder="Type here..." required></input>
  <h2 class="textdescription">Please describe the item you are giving or asking in detail, for example: the size, the color, and the condition, etc. </h2>
  <h2 class="textdescription2">Please describe the item you are giving or asking in detail. </h2>
  <textarea id="description" rows="3" class="task-description" placeholder="Type here..." required></textarea><br><br>
  <button type="submit" class="btnPost" id ="btn-task-save">Post</button> <br></br>
  </form>
  </div>
  <div class="task-container"> 
  </div>
  `;
  const div = document.createElement('div');
  div.innerHTML = viewHome;
  div.classList.add('containerHome');
  const querySnapshot = getTasks();
  let editStatus = false;
  let id = '';
  console.log(querySnapshot);
  const user = updateData();

  getAllTasks((result) => {
    const tasksContainer = div.querySelector('.task-container');
    console.log(tasksContainer);
    let html = '';
    console.log(querySnapshot);
    result.forEach((doc) => {
      const task = doc.data();
      console.log(doc.data());
      // console.log(tasksContainer);
      // g
      html += `<div class="boxContainer">
      <div class = "header">
      <img class = "imageUser" src="../Media/usericon.png" alt="user">
      <p class="nameUser"> ${user.displayName}</p>
      </div>
      <h3 class="5h">${task.title}</h3>
      <p>${task.description}</p>
      <button class="btn-delete" data-id="${doc.id}"> Delete</buttton>
      <button class="btn-edit" data-id="${doc.id}"> Edit</buttton>
   </div>`;
    });
    tasksContainer.innerHTML = html;

    const btnsDelete = tasksContainer.querySelectorAll('.btn-delete');
    btnsDelete.forEach((btn) => {
      btn.addEventListener('click', ({ target: { dataset } }) => {
        deleteTask(dataset.id);
      });
    });

    const taskForm = div.querySelector('.task-form');
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('submit');
      const title = div.querySelector('.task-title');
      const description = div.querySelector('.task-description');
      // console.log(title.value, description.value);
      if (!editStatus) {
        creatingPost(title.value, description.value);
        console.log('updating');
      } else {
        updateTask(id, {
          title: title.value,
          description: description.value,
        });
        editStatus = false;
      }
      taskForm.reset();
    });

    console.log('Hasta aqui');
    const btnsEdit = tasksContainer.querySelectorAll('.btn-edit');
    btnsEdit.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const doc = await getTask(e.target.dataset.id);
        console.log(doc.data());
        const task = doc.data();
        taskForm['post-information'].value = task.title;
        taskForm.description.value = task.description;

        editStatus = true;
        id = doc.id;
        // taskForm['btn-task-save'].innerText = 'Update';
      });
    });
  });

  const btnLogOut = div.querySelector('.btnLogOut');
  btnLogOut.addEventListener('click', () => {
    endSession();
    window.location.hash = '#/';
  });
  return div;
};
