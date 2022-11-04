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
    leftSlideBtm.style.animation = "disappearToLeft 1s ease-out forwards";
    rightOrange.style.animation = "slideDisOrangeToRight 1s ease-out forwards";
    rightOrangeMore.style.animation = "slideDisOrangeBtn 1s ease-out forwards";
    console.log(value);
  } else {
    leftOrange.style.animation = "slideOrange 1s ease-out";
    leftSlideBtm.style.animation = "slideFromLeft 1s ease-out";
    rightOrange.style.animation = "slideOrangeFromRight 1s ease-out forwards";
    rightOrangeMore.style.animation = "slideOrangeBtn 1s ease-out forwards";
  }
});

//opacity
let opacityTransitionSec = document.querySelector(".fourthSection");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log(value);

  if (value > 200) {
    opacityTransitionSec.style.opacity = "0";
    opacityTransitionSec.style.transition = "3s ease-out";
  }
});

// mouse out 이벤트
let orangeSecEvent = document.querySelector(".orangeSecMoreBtn");
let mouseBrownEvent = document.querySelector(".fourthSecMoreBtn");
let mouseEvent = document.querySelector(".fifthSecMoreBtn");

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
