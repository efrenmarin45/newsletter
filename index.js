// Navbar Toggle Functionality
let mainNav = document.getElementById("navMenuJs");
let toggleNav = document.getElementById("navToggleJs");

toggleNav.addEventListener("click", function(){
    mainNav.classList.toggle("active");
});
