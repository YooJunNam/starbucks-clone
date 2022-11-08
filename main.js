// Section 애니메이션 Slide
let leftOrange = document.querySelector(".coffeeImg");
let rightOrange = document.querySelector(".coffeeTextImg");
let rightOrangeMore = document.querySelector(".orangeSecMoreBtn");
let leftSlideText = document.querySelector(".pickY");
let leftSlideBtm = document.querySelector(".pickContent");
let rightSlidePhoto = document.querySelector(".lastSectionPhoto");

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  if (value > 700) {
    leftOrange.style.animation = "slideDisappearOrange 1s ease-out forwards";
    rightOrange.style.animation = "slideDisOrangeToRight 1s ease-out forwards";
    rightOrangeMore.style.animation = "slideDisOrangeBtn 1s ease-out forwards";
    console.log(value);
  } else {
    leftOrange.style.animation = "slideOrange 1s ease-out";
    rightOrange.style.animation = "slideOrangeFromRight 1s ease-out forwards";
    rightOrangeMore.style.animation = "slideOrangeBtn 1s ease-out forwards";
  }
});

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  if (value > 1100) {
    leftSlideText.style.animation = "slideFromLeft 2s ease-out ";
    leftSlideBtm.style.animation = "slideFromLeft 2s ease-out ";
    rightSlidePhoto.style.animation = "slideFromRight 2s ease-out ";
  } else {
    leftSlideText.style.animation = "disappearToLeft 1s ease-out ";
    leftSlideBtm.style.animation = "disappearToLeft 1s ease-out ";
    rightSlidePhoto.style.animation = "disappearToRight 1s ease-out ";
  }
});

//opacity
let opacityTransitionSec = document.querySelector(".fourthSection");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log(value);

  if (value > 1100) {
    opacityTransitionSec.style.opacity = "0.6";
    opacityTransitionSec.style.transition = "3s ease-out";
  } else if (value < 350) {
    opacityTransitionSec.style.opacity = "0.6";
    opacityTransitionSec.style.transition = "3s ease-out";
  } else {
    opacityTransitionSec.style.opacity = "1";
    opacityTransitionSec.style.transition = "3s ease-out";
  }
});

// mouse out 이벤트
let orangeSecEvent = document.querySelector(".orangeSecMoreBtn");
let mouseBrownEvent = document.querySelector(".fourthSecMoreBtn");
let mouseEvent = document.querySelector(".fifthSecMoreBtn");
let lastMouseBtn = document.querySelector(".detailBtn");

orangeSecEvent.addEventListener("mouseover", function () {
  orangeSecEvent.style.background = "white";
  orangeSecEvent.style.textDecoration = "underline";
  orangeSecEvent.style.transition = "1s ease-out";
});

orangeSecEvent.addEventListener("mouseout", function () {
  orangeSecEvent.style.background = "transparent";
  orangeSecEvent.style.transition = "1s ease-out";
  orangeSecEvent.style.textDecoration = "none";
});

mouseBrownEvent.addEventListener("mouseover", function () {
  mouseBrownEvent.style.background = "#b9813e";
  mouseBrownEvent.style.color = "white";
  mouseBrownEvent.style.transition = "1s ease-out";
});

mouseBrownEvent.addEventListener("mouseout", function () {
  mouseBrownEvent.style.color = "#b9813e";
  mouseBrownEvent.style.background = "transparent";
  mouseBrownEvent.style.transition = "1s ease-out";
});

mouseEvent.addEventListener("mouseout", function () {
  mouseEvent.style.color = "black";
  mouseEvent.style.background = "white";
  mouseEvent.style.transition = "1s ease-out";
  console.log("out");
});

mouseEvent.addEventListener("mouseover", function () {
  mouseEvent.style.color = "white";
  mouseEvent.style.background = "black";
  mouseEvent.style.transition = "1s ease-out";

  console.log("in");
});

lastMouseBtn.addEventListener("mouseout", function () {
  lastMouseBtn.style.color = "white";
  lastMouseBtn.style.background = "transparent";
  lastMouseBtn.style.transition = "1s ease-out";
  console.log("out");
});

lastMouseBtn.addEventListener("mouseover", function () {
  lastMouseBtn.style.color = "white";
  lastMouseBtn.style.background = "orange";
  lastMouseBtn.style.borderRadius = "30px";
  lastMouseBtn.style.transition = "1s ease-out";

  console.log("in");
});

let menuCoffee = document.querySelector(".coffee");
let menuBox = document.querySelector(".menuBox");
let menuBar = document.querySelector(".menuBarContainer");
let menuBarBtm = document.querySelector(".menuBarBtmBox");
let middeSec = document.querySelector(".middleSection");

menuCoffee.addEventListener("mouseover", function () {
  menuBox.style.display = "block ";
  menuBox.style.transition = "2s ease-out";
  menuBarBtm.style.display = "block";
  console.log("햐");
});

menuCoffee.addEventListener("mouseout", function () {
  menuBarBtm.style.display = "none forwards";
});
