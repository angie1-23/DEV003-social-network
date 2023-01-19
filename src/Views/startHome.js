// import { onNavigate } from '../main.js';

export default () => {
  const viewStart = `
<div class="containerStart">
<figure>
<img class = "image" src="../Media/LogoR.png" alt="logo">
</figure>
<h2 class= "textIntro">Welcome to Recycle 24/7 ! We believe buying less and sharing more  is the future of sustainable development!</h2>
<a class= "button" href="#/email">Sing up with email</a>
<a class= "button" href="#/login">Sing with Google</a>
<p class="textInfo" > Already have  an account</p> 
<a class= "button" href="#/login">Log in</a>
</div>

`;

  const divStart = document.createElement('div');
  divStart.innerHTML = viewStart;
  divStart.classList.add('introstart');
  return divStart;
};

// export const start = () => {
//   const divstart = document.createElement('div');
//   const introduction = document.createElement('h2');
//   const logo = document.createElement('img');
//   logo.src = '../Media/LogoR.png';
//   // document.body.appendChild(logo);
//   logo.classList.add('logo_body');
//   const buttonemail = document.createElement('button');
//   const buttongoogle = document.createElement('button');
//   `<section>
//   <p class="login_phrase">Already have  an account</p>
//   </section>
//   `;
//   const buttonlogin = document.createElement('button');
//   introduction.textContent = 'We believe buying less  and sharing
//  more  is the future of sustainable development!';
//   buttonemail.textContent = 'Sing up with email';
//   buttongoogle.textContent = 'Sing up with google';
//   buttonlogin.textContent = 'Login';

//   buttonlogin.addEventListener('click', () => {
//     onNavigate('/login');
//   });
//   buttonemail.addEventListener('click', () => {
//     onNavigate('/register');
//   });
//   divstart.append(logo, introduction, buttonemail, buttongoogle, buttonlogin);

//   return divstart;
// };
