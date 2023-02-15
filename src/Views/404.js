export default () => {
  // funcion que muestra vista de pagina no encontrada cuando el hash es incorrecto
  const different = `
  <h2 class= "text-center">404</h2>
  <h2 class= "text-center"> Page not found </h2>
  <h2 class= "text-center"> The file can not be found in this page. </h2>
  <h2 class= "text-center"> ERROR!! </h2>
  `;
  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'message');
  divElement.innerHTML = different;
  return divElement; // regresamos la vista para que la pinte en el contenedor
};
