// Responsive Navigation******************

const burgerIcon = document.querySelector(".burger-icon");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

burgerIcon.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
