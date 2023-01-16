import { onNavigate } from '../main.js';

export const login = () => {
  const divlogin = document.createElement('div');
  const welcome = document.createElement('h2');
  const email = document.createElement('input');
  const password = document.createElement('input');
  // const logo = document.createElement('img');

  const buttonsingin = document.createElement('button');
  welcome.textContent = 'Thanks for being part our community and share';
  // Logo
  email.textContent = 'Email';
  password.textContent = 'Password';
  buttonsingin.textContent = 'Login';

  // logo.src = item.LogoR.png;
  // logo.class.add('logo_body');
  // document.body.appendChild(logo);

  divlogin.appendChild(welcome, email, password, buttonsingin);

  return divlogin;
};
