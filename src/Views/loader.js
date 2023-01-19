export default () => {
  const viewLoader = `
  <div class="loader">
  <img src="../Media/LogoR.png" />
  </div>
  <a class= "button" href="#/">Start</a>
  `;

  const divStart = document.createElement('div');
  divStart.innerHTML = viewLoader;
  divStart.classList.add('introstart');
  return divStart;
};
