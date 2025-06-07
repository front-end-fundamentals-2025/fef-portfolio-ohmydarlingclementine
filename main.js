document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("about-btn");
  const message = document.getElementById("message");

  button.addEventListener("click", function () {
    // change button background and text color
    button.style.backgroundColor = "#fcb1e7"; 
    button.style.color = "#fff"; // white text

    // show a message below the button
    message.style.display = "block";
    message.textContent = "Hey! You clicked the About Me button!";
  });
});
