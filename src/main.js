/* eslint-disable import/no-cycle */
// Este es el punto de entrada de tu aplicacion

import { start } from './Components/start.js';
import { login } from './Components/login.js';

const root = document.getElementById('root');

// myFunction();

// Renderizar con nuestra ruta

const routes = {
  '/': start,
  '/login': login,
  // '/about' : about
};
export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.appendChild = (routes[pathname]());
};
const component = routes[window.location.pathname];

root.appendChild(component());
