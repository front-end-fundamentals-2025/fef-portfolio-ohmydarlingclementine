/*https://www.youtube.com/watch?v=OgoSrwta6Rg*/

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("about-btn");
  if (btn) {
    btn.addEventListener("click", function () {
      btn.classList.toggle("clicked");
      alert("You clicked the About Me button!");
    });
  }
});
