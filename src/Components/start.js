import { onNavigate } from '../main.js';

export const start = () => {
  const divstart = document.createElement('div');
  const introduction = document.createElement('h2');
  //   const logo = document.createElement('img');

  // `<section>
  // <p class="introduction">We believe buying less  and sharing more  is the future of sustainable development!</p>
  // </section>
  // `
  const buttonemail = document.createElement('button');
  const buttongoogle = document.createElement('button');
  // `<section>
  // <p class="login_phrase">Already have  an account</p>
  // </section>
  // `
  const buttonlogin = document.createElement('button');
  introduction.textContent = 'We believe buying less  and sharing more  is the future of sustainable development!';
  buttonemail.textContent = 'Sing up with email';
  buttongoogle.textContent = 'Sing up with google';
  buttonlogin.textContent = 'Login';

  // logo.src = item.LogoR.png;
  // logo.class.add('logo_body');
  // document.body.appendChild(logo);
  buttonlogin.addEventListener('click', () => {
    onNavigate('/login');
  });
  divstart.append(introduction, buttonemail, buttongoogle, buttonlogin);

  return divstart;
};
