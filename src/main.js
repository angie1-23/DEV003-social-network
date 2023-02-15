/* eslint-disable import/no-cycle */
// Esta es una pagina de logica para cambiar de pagina o hash
import { changePage } from './viewPages/router.js'; // se exporta funcion del router para cambiar de hash

const init = () => {
  changePage(window.location.hash); // con los hash cambia de location osea pagina
  window.addEventListener('hashchange', () => changePage(window.location.hash));
  // cuando haga click a un hashchange cambia de pagina
};
// al cargar la pagina por primera vez manda la funcion de iniciar
window.addEventListener('load', init);
