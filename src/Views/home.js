import { endSession } from '../controler/controlerReg.js';

export default () => {
  const viewHome = `
  <div class = "containerHome">
  <button type="submit" class="btnLogOut"> Log Out </button> <br></br>
  <figure>
  <img class = "image" src="../Media/LogoR.png" alt="logo">
  </figure>
  <h2> What would you like to ask or give for today? </h2>
  <textarea id="post-description" rows="3" class="textPost" placeholder="Write here..." ></textarea><br><br>
  <a class= "button" href="#/home">Post</a><br><br>
  <div>
  <label> </label>
  
  </div>
  </div>
  `;
  const div = document.createElement('div');
  div.innerHTML = viewHome;
  div.classList.add('containerHome');
  const btnLogOut = div.querySelector('.btnLogOut');
  btnLogOut.addEventListener('click', () => {
    endSession();
    window.location.hash = '#/';
  });
  return div;
};
