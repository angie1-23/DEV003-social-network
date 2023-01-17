import { components } from '../Views/index.js';

const changePage = (hash) => {
  const containerBody = document.getElementById('container');
  containerBody.innerHTML = '';
  switch (hash) {
    case '':
    case '#':
    case '#/': { return containerBody.appendChild(components.Start()); }
    case '#/login': { return containerBody.appendChild(components.Login()); }
    default:
      return containerBody.appendChild(components.Different());
  }
  // console.log(route);
};

export { changePage };
