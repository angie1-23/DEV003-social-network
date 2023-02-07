import { deleteTask } from '../lib/firebase.js';

// Eliminar post
export const deletePost = (tasksContainer) => {
  const btnsDelete = tasksContainer.querySelectorAll('.btn-delete');
  btnsDelete.forEach((btn) => {
    btn.addEventListener('click', ({ target: { dataset } }) => {
      const confirmar = confirm('¿Estas seguro de eliminar el comentario?');
      if (confirmar === true) {
        deleteTask(dataset.id)
          .then(() => {
          })
          .catch(() => {
          });
      }
    });
  });
};
