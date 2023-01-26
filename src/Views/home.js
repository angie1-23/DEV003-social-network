import { logOut } from '../lib/firebase.js';

export default () => {
  const viewHome = `
  <div class = "container">
  <button type="submit" class="btnLogOut"> Log Out </button> <br>
  <figure>
  <img class = "image" src="../Media/LogoR.png" alt="logo">
  </figure>
  <a class= "button" href="#/post" id="btnPost">Post</a>
  </div>
  `;

  const div = document.createElement('div');
  div.innerHTML = viewHome;
  div.classList.add('introEmail');
  const btnLogOut = div.querySelector('.btnLogOut');
  btnLogOut.addEventListener('click', () => {
    logOut();
  });
  return div;
};
