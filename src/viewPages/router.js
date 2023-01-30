import { components } from '../Views/index.js';

const changePage = (hash) => {
  const containerBody = document.getElementById('container');
  containerBody.innerHTML = '';
  switch (hash) {
    case '':
    case '#':
    case '#/': { return containerBody.appendChild(components.Start()); }
    case '#/loader': { return containerBody.appendChild(components.Loader()); }
    case '#/login': { return containerBody.appendChild(components.Login()); }
    case '#/email': { return containerBody.appendChild(components.Email()); }
    case '#/home': { return containerBody.appendChild(components.Home()); }
    default:
      return containerBody.appendChild(components.Different());
  }
  // console.log(route);
};

export { changePage };
