export default () => {
  const viewGoogle = `
    <div class="containerStart">
    <a class= "button" href="#/">Back</a>
    <figure>
    <img class = "image" src="../Media/LogoR.png" alt="logo">
    </figure>
    <h2 class= "textIntro"> GOOGLE </h2>
    </div>
    `;
  const div = document.createElement('div');
  div.innerHTML = viewGoogle;
  return div;
};
