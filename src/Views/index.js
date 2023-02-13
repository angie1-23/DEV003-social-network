import start from './startHome.js';
import login from './login.js';
import different from './404.js';
import RegisterForm from './loginEm.js';
import home from './home.js';

const components = {
  Start: start,
  Login: login,
  Different: different,
  Email: RegisterForm,
  Home: home,
};

export { components };
