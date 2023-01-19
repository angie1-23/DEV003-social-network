import loader from './loader.js';
import start from './startHome.js';
import login from './login.js';
import different from './404.js';
import email from './loginEm.js';
import register from './register.js';
import home from './home.js';
import post from './post.js';

const components = {
  Loader: loader,
  Start: start,
  Login: login,
  Different: different,
  Email: email,
  Register: register,
  Home: home,
  Post: post,
};

export { components };
