import { components } from '../Views/index.js'; // importamos nuestras vistas ya en componentes

// creamos una funcion para cambiar pagina
export const changePage = (hash) => { // la propiedad que queremos cambiar es hash
  const containerBody = document.getElementById('container'); // elemento que esta en el html que va a contener TODO
  containerBody.innerHTML = ''; // para que limpie el contenedor cada que cambie de vista
  switch (hash) { // cambia de hash
    case '': // manda a Start
    case '#': // manda a Start
    case '#/': { return containerBody.appendChild(components.Start()); } // pinta el componente en mi elemento contenedor de html
    case '#/login': { return containerBody.appendChild(components.Login()); } // pinta componente Login
    case '#/email': { return containerBody.appendChild(components.Email()); } // pinta componente Email
    case '#/home': { return containerBody.appendChild(components.Home()); } // pinta componente Home
    default: // si no encuentra un hash por default va a pintar Different que muestra un error
      return containerBody.appendChild(components.Different());
  }
};
