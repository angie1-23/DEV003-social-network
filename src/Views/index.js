import start from './startHome.js';
import login from './login.js';
import different from './404.js';
import RegisterForm from './loginEm.js';
import home from './home.js';
// importamos cada pagina o view con su logica y le damos un nombre a los componentes

// se crea un objeto que se va a exportar con los nuevos nombres de las paginas/componentes
export const components = {
  Start: start,
  Login: login,
  Different: different,
  Email: RegisterForm,
  Home: home,
};
