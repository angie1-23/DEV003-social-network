export default () => {
  const different = `
  <h2 class= "text-center">404</h2>
  <h1 class= "text-center"> Page not found </h1>
  <p class= "text-center"> The file can not be founf in this page. </p>
  `;
  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'message');
  divElement.innerHTML = different;
  return divElement;
};
