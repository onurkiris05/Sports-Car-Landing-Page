const menuBtn = document.querySelector(".menu");
const navBar = document.querySelector(".nav-list");
const bgVideo = document.querySelector(".bg-video");
const modelTitle = document.querySelector(".model-title");
const trailer = document.querySelector(".trailer");
const bgVideoButtons = document.querySelectorAll(".bg-media-btn");
const screenVideos = document.querySelectorAll(".screen-video");

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

function setCurrentCar(carModel) {
  const currentCar = carData.find((car) => car.model === carModel);
  modelTitle.textContent = currentCar.model;
  modelTitle.style.color = currentCar.color;
  bgVideo.src = currentCar.video;
  trailer.src = currentCar.video;

  resetBgVideo();
}

function toggleBgVideo() {
  bgVideoButtons.forEach((button) => {
    button.classList.toggle("active");
  });

  screenVideos.forEach((video) => {
    video.style.display = bgVideo.paused ? "block" : "none";
  });

  bgVideo.paused ? bgVideo.play() : bgVideo.pause();
}

function resetBgVideo() {
  bgVideoButtons.forEach((button) => {
    button.classList.remove("active");
    if (button.classList.contains("pause")) button.classList.add("active");
  });
  screenVideos.forEach((video) => {
    video.style.display = "block";
  });
}

bgVideoButtons.forEach((button) => {
  button.addEventListener("click", toggleBgVideo);
});
