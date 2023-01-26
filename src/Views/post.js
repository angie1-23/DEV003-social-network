export default () => {
  const viewPost = `
<div class="containerStart">
<a class= "buttonback" href="#/home">Back</a>

<figure>
<img class = "image" src="../Media/LogoR.png" alt="logo">
</figure>
<h2 class= "textIntro"> IMPORTANT! <br>Here in Recycling 24/7 we share, we give, and receive FREELY.<br>We never sell, buy, rent or trade any item. </h2>

<input type="checkbox" class="checkBox">I accept the rules of this app.</input><br><br>
<h2> What would you like to ask or give for today? </h2>
<input type="text" class="textInputPost" id="inputPost" placeholder= "Write here..."></input><br>
<a class= "button" href="#/home">Post</a>
</div>
`;

  const div = document.createElement('div');
  div.innerHTML = viewPost;
  div.classList.add('introEmail');
  // window.location.hash = '#/';
  return div;
};
