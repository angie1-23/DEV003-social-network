import { deleteTask } from '../lib/firebase.js';

// Eliminar post
export const deletePost = (tasksContainer) => {
  const btnsDelete = tasksContainer.querySelectorAll('.btn-delete');
  btnsDelete.forEach((btn) => {
    btn.addEventListener('click', () => {
      const idDelete = btn.dataset.id;
      // eslint-disable-next-line no-restricted-globals
      const confirmar = confirm('¿Estas seguro de eliminar el comentario?');
      if (confirmar === true) {
        deleteTask(idDelete)
          .then((good) => good)
          .catch((error) => {
            console.log(error);
          });
      }
    });
  });
};
