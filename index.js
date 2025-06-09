/*https://www.youtube.com/watch?v=OgoSrwta6Rg */

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Lina's Portfolio - About Me</title>
  <link rel="stylesheet" href="css/main.css">
  <script defer>
    // our function to show a message
    function showMessage() {
      alert("Hi there! This is Lina!");
    }

    // this for attaching the event listener
    document.addEventListener("DOMContentLoaded", function () {
      const btn = document.getElementById("about-btn");
      if (btn) {
        btn.addEventListener("click", showMessage);

    
      }
    });
  </script>
</head>
<body>

  <button id="about-btn">About Me</button>

</body>
</html>
