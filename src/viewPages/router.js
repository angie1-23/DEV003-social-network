import { components } from '../Views/index.js';

const changePage = (hash) => {
  const containerBody = document.getElementById('container');
  containerBody.innerHTML = '';
  switch (hash) {
    case '':
    case '#':
    case '#/': { return containerBody.appendChild(components.Start()); }
    case '#/login': { return containerBody.appendChild(components.Login()); }
    case '#/email': { return containerBody.appendChild(components.Email()); }
    case '#/register': { return containerBody.appendChild(components.Register()); }
    case '#/home': { return containerBody.appendChild(components.Home()); }
    case '#/post': { return containerBody.appendChild(components.Post()); }
    default:
      return containerBody.appendChild(components.Different());
  }
  // console.log(route);
};

export { changePage };
