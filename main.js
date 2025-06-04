const aboutBtn = document.getElementById('about-btn');
const message = document.getElementById('message');

aboutBtn.addEventListener('click', () => {
  message.textContent = "Hey there!!";   // setting the message text here
  message.style.display = "block"; // show the message here
});
