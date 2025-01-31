const menuBtn = document.querySelector(".menu");
const navBar = document.querySelector(".nav-list");

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems);
});

function toggleMenu() {
  menuBtn.classList.toggle("active");
  navBar.classList.toggle("active");
}

menuBtn.addEventListener("click", toggleMenu);

const carData = [
  { model: "765LT SPIDER", video: "/assets/videos/mclaren-1.mp4", color: "#00c2de" },
  { model: "ARTURA", video: "/assets/videos/mclaren-2.mp4", color: "#92ff00" },
  { model: "750S", video: "/assets/videos/mclaren-3.mp4", color: "#ff0015" },
  { model: "765LT", video: "/assets/videos/mclaren-4.mp4", color: "#ff2e00" },
  { model: "750S SPIDER", video: "/assets/videos/mclaren-5.mp4", color: "#bbc0dd" },
];
