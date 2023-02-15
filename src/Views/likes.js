import { updateTask, auth, getTask } from '../lib/firebase.js';
// importamos funciones de firebase para poder que cada usuario de like a diferentes post

export const likePost = (tasksContainer) => { // esportamos funcion al contenedor del post
  const buttonLike = tasksContainer.querySelectorAll('.btn-Like'); // traemos boton like
  buttonLike.forEach((likes2) => { // por cada boton vamos a hacer la siguiente funcion
    likes2.addEventListener('click', () => { // en cada click
      const id = likes2.dataset.id; // trae del dataset el id
      getTask(id).then((promise) => { // promesa que va a contar los likes
        let likes = promise.data().likes;
        if (likes.lenght === 0) { // si es igual a 0
          likes.push(auth.currentUser.email); // empuja el usuario = no hay usuario
        } else if (!likes.includes(auth.currentUser.email)) { // diferente a 0 incluye el usuario
          likes.push(auth.currentUser.email); // empuja el usuario para contarlo
        } else {
          likes = likes.filter(
            (email) => !email.includes(auth.currentUser.email),
          ); // filtra solo el correo para contarlos
        }
        updateTask(id, { likes }); // actualiza los likes que dan los usuarios
      });
    });
  });
};
