import { endSession } from '../controler/controlerReg.js';

export default () => {
  const viewHome = `
  <div class = "containerRow">
  <div class="containerColumn">
  <button type="submit" class="btnLogOut"> Log Out </button> <br>
  </div>
  <div class="containerColumn">
  <a href="#/post" id="btnPost">Post</a><br>
   </div>
   <div class = "containerRow2">
   <figure>
   <img class = "image" src="../Media/LogoR.png" alt="logo">
   </figure>
  </div>
  </div>
  `;

  const div = document.createElement('div');
  div.innerHTML = viewHome;
  div.classList.add('introEmail');
  const btnLogOut = div.querySelector('.btnLogOut');
  btnLogOut.addEventListener('click', () => {
    endSession();
    window.location.hash = '#/';
  });
  return div;
};
