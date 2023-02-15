// eslint-disable-next-line import/no-extraneous-dependencies
import Swal from 'sweetalert2/dist/sweetalert2.js';

import { deleteTask } from '../lib/firebase.js'; // importamos funcion delete de firebase

export const deletePost = (tasksContainer) => {
  const btnsDelete = tasksContainer.querySelectorAll('.btn-delete');
  // funcion que va a recorrer todos los botones de delete
  btnsDelete.forEach((btn) => {
    // funcion que al dar clock a delete, elimina los post
    btn.addEventListener('click', () => {
      const idDelete = btn.dataset.id;
      Swal.fire({ // sweet alert dependency
        title: 'Are you sure you want to delete your post?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        customClass: {
          actions: 'my-actions',
          cancelButton: 'order-1 right-gap',
          confirmButton: 'order-2',
        },
      }).then((result) => { // promesa que si se cumple
        if (result.isConfirmed) { // y si se confirma con el sweet alert
          deleteTask(idDelete); // llama a la funcion de firebase que borra el post
          Swal.fire('Deleted!', '', 'success'); // otro alert de confirmacion
        }
      });
    });
  });
};
