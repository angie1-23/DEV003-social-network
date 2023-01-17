export default () => {
  const login = `
<h2 class= "text-center">Pagina de Login</h2>
<figure class = "text-center" >
<img class = "image" src="../Media/LogoR.png" alt="logo">
</figure>`;
  const div = document.createElement('div');
  div.innerHTML = login;
  return div;
};

// import { onNavigate } from '../main.js';

// export const login = () => {
//   const divlogin = document.createElement('div');
//   const buttonBack = document.createElement('button');
//   buttonBack.textContent = '⬅️ back';
//   const welcome = document.createElement('h2');
//   const inputEmail = document.createElement('input');
//   // inputEmail.textContent = 'Email';
//   inputEmail.innerText = 'Email';
//   const inputPassword = document.createElement('input');
//   inputPassword.textContent = 'Password';
//   const buttonSingIn = document.createElement('button');
//   buttonSingIn.textContent = 'Login';
//   welcome.textContent = 'Thanks for being part our community and share';
//   // Logo
//   // const logo = document.createElement('img');

//   // logo.src = item.LogoR.png;
//   // logo.class.add('logo_body');
//   // document.body.appendChild(logo);
//   buttonBack.addEventListener('click', () => {
//     onNavigate('/');
//   });
//   buttonSingIn.addEventListener('click', () => {
//     onNavigate('/');
//   });
//   divlogin.append(buttonBack, welcome, inputEmail, inputPassword, buttonSingIn);

//   return divlogin;
// };
