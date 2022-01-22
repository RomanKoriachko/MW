const colorSwitch = document.getElementById("colors");
const buttonOrange = document.querySelector(".button-orange");
const buttonRed = document.querySelector(".button-red");
const buttonGreen = document.querySelector(".button-green");
const buttonGray = document.querySelector(".button-gray");
const buttonPink = document.querySelector(".button-pink");

buttonOrange.addEventListener("click", function() {
    colorSwitch.classList.toggle("color1");
    colorSwitch.classList.remove("color2", "color3", "color4", "color5");
});
buttonRed.addEventListener("click", function() {
    colorSwitch.classList.toggle("color2");
    colorSwitch.classList.remove("color1", "color3", "color4", "color5");
});
buttonGreen.addEventListener("click", function() {
    colorSwitch.classList.toggle("color3");
    colorSwitch.classList.remove("color1", "color2", "color4", "color5");
});
buttonGray.addEventListener("click", function() {
    colorSwitch.classList.toggle("color4");
    colorSwitch.classList.remove("color1", "color2", "color3", "color5");
});
buttonPink.addEventListener("click", function() {
    colorSwitch.classList.toggle("color5");
    colorSwitch.classList.remove("color1", "color2", "color3", "color4");
});

const firstSlideBtn = document.getElementById("show-more1");
const secondSlideBtn = document.getElementById("show-more2");
const thirdSlideBtn = document.getElementById("show-more3");
const firstSlide = document.getElementById("slide3-content1");
const secondSlide = document.getElementById("slide3-content2");
const thirdSlide = document.getElementById("slide3-content3");
const showOnlyOne = document.getElementById("show-one");

firstSlideBtn.addEventListener("click", function(){
    showOnlyOne.classList.toggle("one-slide");
    showOnlyOne.classList.toggle("row");
    secondSlide.classList.toggle("slide3-row");
    secondSlide.classList.toggle("slide3-content2");
    secondSlide.classList.toggle("hide");
    thirdSlide.classList.toggle("slide3-row");
    thirdSlide.classList.toggle("slide3-content3");
    thirdSlide.classList.toggle("hide");
});

secondSlideBtn.addEventListener("click", function(){
    showOnlyOne.classList.toggle("one-slide");
    showOnlyOne.classList.toggle("row");
    firstSlide.classList.toggle("slide3-row");
    firstSlide.classList.toggle("slide3-content2");
    firstSlide.classList.toggle("hide");
    thirdSlide.classList.toggle("slide3-row");
    thirdSlide.classList.toggle("slide3-content3");
    thirdSlide.classList.toggle("hide");    
});

thirdSlideBtn.addEventListener("click", function(){
    showOnlyOne.classList.toggle("one-slide");
    showOnlyOne.classList.toggle("row");
    firstSlide.classList.toggle("slide3-row");
    firstSlide.classList.toggle("slide3-content2");
    firstSlide.classList.toggle("hide");
    secondSlide.classList.toggle("slide3-row");
    secondSlide.classList.toggle("slide3-content3");
    secondSlide.classList.toggle("hide");
});





