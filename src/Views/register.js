import { onNavigate } from '../main.js';

export const register = () => {
  const divregister = document.createElement('div');
  const buttonBack = document.createElement('button');
  buttonBack.textContent = '⬅️';
  const fillInfo = document.createElement('h2');
  const inputUsername = document.createElement('input');
  inputUsername.textContent = 'Username';
  const inputFullName = document.createElement('input');
  inputFullName.textContent = 'Password';
  const inputCellPhone = document.createElement('input');
  inputCellPhone.textContent = 'Password';
  const inputLocation = document.createElement('input');
  inputLocation.textContent = 'Password';
  const buttonSave = document.createElement('button');
  buttonSave.textContent = 'Login';
  fillInfo.textContent = 'Thanks for being part of this awesome community, help us fill ypur personal information.';
  // Logo
  // const logo = document.createElement('img');

  // logo.src = item.LogoR.png;
  // logo.class.add('logo_body');
  // document.body.appendChild(logo);
  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });
  buttonSave.addEventListener('click', () => {
    onNavigate('/');
  });
  divregister.append(buttonBack, fillInfo, inputUsername, inputFullName, inputCellPhone);
  divregister.append(inputLocation, buttonSave);

  return divregister;
};
