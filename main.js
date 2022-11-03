// Section 애니메이션 Slide

let leftSlideText = document.querySelector(".pickY");
let leftSlideBtm = document.querySelector(".pickContent");
let rightSlidePhoto = document.querySelector(".lastSectionPhoto");
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log(value);

  if (value > 500) {
    leftSlideText.style.animation = "disappearToLeft 1s ease-out forwards";
    leftSlideBtm.style.animation = "disappearToLeft 1s ease-out forwards";
    rightSlidePhoto.style.animation = "disappearToRight 1s ease-out forwards";
  } else {
    leftSlideText.style.animation = "slideFromLeft 1s ease-out";
    leftSlideBtm.style.animation = "slideFromLeft 1s ease-out";
    rightSlidePhoto.style.animation = "slideFromRight 1s ease-out";
  }
});
