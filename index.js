// var checkbox = document.getElementById("darkModeOn");

// checkbox.addEventListener("change", function() {
//     document.body.classList.toggle("dark-theme");
// });
document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.getElementById("darkModeOn");
  
    checkbox.addEventListener("change", function() {
        document.body.classList.toggle("dark-theme");
    });
  });