const menuBtn = document.querySelector(".menu");
const navBar = document.querySelector(".nav-list");

function toggleMenu() {
  menuBtn.classList.toggle("active");
  navBar.classList.toggle("active");
}

menuBtn.addEventListener("click", toggleMenu);
