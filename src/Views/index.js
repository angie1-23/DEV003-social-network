import loader from './loader.js';
import start from './startHome.js';
import login from './login.js';
import different from './404.js';
import email from './loginEm.js';
import home from './home.js';

const components = {
  Loader: loader,
  Start: start,
  Login: login,
  Different: different,
  Email: email,
  Home: home,
};

export { components };
