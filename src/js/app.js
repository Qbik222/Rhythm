import * as flsFunctions from "./modules/functions.js";
 flsFunctions.isWebp();
/////////slider
 const itemSlides = document.querySelectorAll(".slider__item");
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
        menu.classList.toggle("menu__open");
        burger.classList.toggle("burger__open");
        document.querySelector("#open").classList.toggle("btn__active");
        document.querySelector("#close").classList.toggle("btn__active");

    });
})
///////////menu burger

//////modal

const modal = document.querySelector(".modal");
const screenHeight = window.screen.availHeight

console.log(screenHeight)

function showModalByScroll (){
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight / 100 * 48 - 10){
        modal.classList.add("display__mode")    
    }
    if (window.pageYOffset + document.documentElement.clientHeight <= document.documentElement.scrollHeight / 100 * 48 - 10){
        modal.classList.remove("display__mode")    
    }
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight / 100 * 48){
        modal.classList.add("modal__active")  
        
    }
    if(window.pageYOffset + document.documentElement.clientHeight <= document.documentElement.scrollHeight / 100 * 48){
        modal.classList.remove("modal__active")  
    }
    
}
window.addEventListener("scroll", showModalByScroll );


////////modal











