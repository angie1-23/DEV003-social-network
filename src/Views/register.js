export default () => {
  const viewRegister = `
<div class="containerStart">
<a class= "button" href="#/email">Back</a>
<a class= "button" href="#/post">Back</a>
<figure>
<img class = "image" src="../Media/LogoR.png" alt="logo">
</figure>
<h2 class= "textIntro"> Thanks for being part of this awesome community, help us fill your personal information. </h2>
<input type="text" placeholder="Username"class="textInput"></input><br>
<input type="text" placeholder="Full Name"class="textInput"></input><br>
<input type="text" placeholder="Cell Phone"class="textInput"></input><br>
<input type="text" placeholder="Location"class="textInput"></input><br>
<a class= "button" href="#/home">Save</a>
</div>
`;

  const div = document.createElement('div');
  div.innerHTML = viewRegister;
  div.classList.add('introEmail');
  return div;
};
