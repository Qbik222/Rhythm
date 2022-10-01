import * as flsFunctions from "./modules/functions.js";
 flsFunctions.isWebp();

 let itemSlides = document.querySelectorAll(".slider__item");
 let currentSlide = 0;



// document.querySelector(".carousel__slider").addEventListener("click", slider);

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

let sliderInterval = setInterval(slider, 3000);