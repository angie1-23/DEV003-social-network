import
{ updateTask, auth, getTask } from '../lib/firebase.js';

export const likePost = (tasksContainer) => {
  const buttonLike = tasksContainer.querySelectorAll('.btn-Like');
  buttonLike.forEach((likes2) => {
    likes2.addEventListener('click', () => {
      const id = likes2.dataset.id;
      getTask(id).then((promise) => {
        const likes = promise.data().likes;
        console.log(likes);
        // if (likes.lenght === 0) {
        //   likes.push(auth.currentUser.email);
        // } else if (!likes.includes(auth.currentUser.email)) {
        //   likes.push(auth.currentUser.email);
        // } else {
        //   likes = likes.filter(
        //     (email) => !email.includes(auth.currentUser.email),
      });
    });
  });
};
// updateTask(id, { likes });
