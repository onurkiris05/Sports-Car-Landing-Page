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
  {
    model: "765LT SPIDER",
    video: "https://res.cloudinary.com/djzahz5ym/video/upload/v1744786131/avboolgutpkrext89ohs.mp4",
    color: "#00c2de",
  },
  {
    model: "ARTURA",
    video: "https://res.cloudinary.com/djzahz5ym/video/upload/v1744786134/tg2u5qecrk36fkhrnuk2.mp4",
    color: "#92ff00",
  },
  {
    model: "750S",
    video: "https://res.cloudinary.com/djzahz5ym/video/upload/v1744786155/hgam188elxuqawhkopd9.mp4",
    color: "#ff0015",
  },
  {
    model: "765LT",
    video: "https://res.cloudinary.com/djzahz5ym/video/upload/v1744786117/z7wmcnrwej9iv3jxs4oh.mp4",
    color: "#ff2e00",
  },
  {
    model: "750S SPIDER",
    video: "https://res.cloudinary.com/djzahz5ym/video/upload/v1744786158/slpvrpediw5lsiimonuh.mp4",
    color: "#bbc0dd",
  },
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
