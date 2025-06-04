document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("about-btn");
  const message = document.getElementById("message");

  button.addEventListener("click", function () {
    message.textContent = "Hey there you!!";
    message.style.display = "block";
  });
});
