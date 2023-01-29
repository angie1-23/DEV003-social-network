export default () => {
  const viewPost = `
<div class = "containerRow">
<div class="containerColumn">
<a href="#/"> <img class = "buttonback" src="../Media/backarrow.png" alt="botonback" ></a>
<figure>
<img class = "image" src="../Media/LogoR.png" alt="logo">
</figure>
<h2 class= "textIntro"> IMPORTANT! <br>Here in Recycling 24/7 we share, we give, and receive FREELY.<br>We never sell, buy, rent or trade any item. </h2>
<form>
<input type="checkbox" class="checkAccept" name="accept" required> I accept the rules of Recycle 24/7<br><br>
</form>
</div>
<div class="line"> </div>
<div class="containerColumn" id="columnRight">
<h2> What would you like to ask or give for today? </h2>
<input type="text" class="textInputPost" id="inputPost" placeholder= "Write here..."></input><br><br>
<a class= "button" href="#/home">Post</a><br><br>
</div>
</div>
`;

  const div = document.createElement('div');
  div.innerHTML = viewPost;
  div.classList.add('introEmail');
  // window.location.hash = '#/';
  return div;
};
