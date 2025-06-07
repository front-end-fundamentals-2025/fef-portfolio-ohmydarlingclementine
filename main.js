document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("about-btn");

  button.addEventListener("click", function () {
    // Add a class to change its color
    button.classList.add("clicked");
  });
});

