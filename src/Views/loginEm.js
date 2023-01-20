export default () => {
  const viewLoginEm = `
<div class="containerStart">
<a class= "button" href="#/">Back</a>
<figure>
<img class = "image" src="../Media/LogoR.png" alt="logo">
</figure>
<h2 class= "textIntro"> Thanks for being part of our community and share with us! <br> Sign Up! </h2>
<input type="text" placeholder="Email"class="textInput"></input><br>
<label></label>
<input type="text" placeholder="Password"class="textInput"></input><br>
<label></label>
<input type="text" placeholder="Confirm password"class="textInput"></input><br>
<label></label>
<a class= "button" href="#/register">Register</a>
</div>
`;

  const div = document.createElement('div');
  div.innerHTML = viewLoginEm;
  div.classList.add('introEmail');
  return div;
};
