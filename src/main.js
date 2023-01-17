/* eslint-disable import/no-cycle */
// Este es el punto de entrada de tu aplicacion
import { changePage } from './viewPages/router.js';

const init = () => {
  changePage(window.location.hash);
  window.addEventListener('hashchange', () => changePage(window.location.hash));
};

window.addEventListener('load', init);

// import { start } from './Components/start.js';
// import { login } from './Components/login.js';
// import { register } from './Components/register';

// const root = document.getElementById('root');

// // myFunction();

// // Renderizar con nuestra ruta

// const routes = {
//   '/': start,
//   '/login': login,
//   '/register': register,
//   // '/about' : about
// };
// export const onNavigate = (pathname) => {
//   window.history.pushState(
//     {},
//     pathname,
//     window.location.origin + pathname,
//   );
//   root.removeChild(root.firstChild);
//   root.appendChild(routes[pathname]());
// };

// const component = routes[window.location.pathname];

// window.onpopstate = () => {
//   root.removeChild(root.firstChild);
//   root.appendChild(component());
// };

// root.appendChild(component());
