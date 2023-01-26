import { logOut } from '../lib/firebase.js';

export default () => {
  const viewHome = `
  <div class="containerStart">
  <button type="submit" class="btnLogOut"> Log Out </button> <br>
  <a class= "button" href="#/post">Post</a>
  <figure>
  <img class = "image" src="../Media/LogoR.png" alt="logo">
  </figure>
  </div>
  `;

  const div = document.createElement('div');
  div.innerHTML = viewHome;
  div.classList.add('introEmail');
  const btnLogOut = div.querySelector('.btnLogOut');
  btnLogOut.addEventListener('click', () => {
    logOut();
    window.location.hash = '#/';
  });
  return div;
};
