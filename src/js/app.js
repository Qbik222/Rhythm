import * as flsFunctions from "./modules/functions.js";
 flsFunctions.isWebp();
/////////slider
 let itemSlides = document.querySelectorAll(".slider__item");
 let currentSlide = 0;
 let sliderTime = 3000;



for (let i = 0; i < itemSlides.length; i++){
    itemSlides[i].classList.add("opacityZero");
}
itemSlides[currentSlide].classList.remove("opacityZero");

function slider() {
    for (let i = 0; i < itemSlides.length; i++){
        itemSlides[i].classList.add("opacityZero");
    }
    itemSlides[currentSlide].classList.remove("opacityZero");
    // currentSlide++;
    if(currentSlide + 1  == itemSlides.length){
        currentSlide = 0;
    }else{
        ++currentSlide
    }

}

let sliderInterval = setInterval(slider, sliderTime);

////////////slider

/////////////menu burger
const menu = document.querySelector(".header__menu-panel");
const menuBtn = document.querySelectorAll(".header__menu");
const burger = document.querySelector(".header__burger");

menuBtn.forEach(item =>{
    item.addEventListener("click", () =>{
        menu.classList.toggle("menu__open")
        burger.classList.toggle("burger__open")
    });
})







