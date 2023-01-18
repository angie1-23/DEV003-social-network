export default () => {
  const viewHome = `
  <div class="containerStart">
  <a class= "button" href="#/">Log Out</a>
  <a class= "button" href="#/post">Post</a>
  <figure>
  <img class = "image" src="../Media/LogoR.png" alt="logo">
  </figure>
  </div>
  `;

  const div = document.createElement('div');
  div.innerHTML = viewHome;
  div.classList.add('introEmail');
  return div;
};
