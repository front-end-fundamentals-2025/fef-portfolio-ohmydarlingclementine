document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("about-btn");

  button.addEventListener("click", function () {
    // toggle the clicked class to change color
    button.classList.toggle("clicked");
  });
});
