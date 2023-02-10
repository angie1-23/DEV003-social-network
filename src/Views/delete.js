// eslint-disable-next-line import/no-extraneous-dependencies
import Swal from 'sweetalert2/dist/sweetalert2.js';

import { deleteTask } from '../lib/firebase.js';

export const deletePost = (tasksContainer) => {
  const btnsDelete = tasksContainer.querySelectorAll('.btn-delete');
  btnsDelete.forEach((btn) => {
    btn.addEventListener('click', () => {
      const idDelete = btn.dataset.id;
      Swal.fire({
        title: 'Are you sure you want to delete your post?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        customClass: {
          actions: 'my-actions',
          cancelButton: 'order-1 right-gap',
          confirmButton: 'order-2',
        },
      }).then((result) => {
        if (result.isConfirmed) {
          deleteTask(idDelete);
          // window.history.go(0);
          Swal.fire('Deleted!', '', 'success');
        }
      });
    });
  });
};
