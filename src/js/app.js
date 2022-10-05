import langArr from "./lang.js"
import changeLanguage from "./modules/changeLng.js";
import mapApi from "./modules/mapsApi.js";

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
        console.log("click")
        menu.classList.toggle("menu__open");
        burger.classList.toggle("burger__open");
        document.querySelector(".open").classList.toggle("btn__active");
        document.querySelector(".close").classList.toggle("btn__active");

    });
})
///////////menu burger

//////modal

const modal = document.querySelector(".modal");
const screenHeight = window.screen.availHeight

console.log(screenHeight)

function showModalByScroll (){
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight / 100 * 47 - 10){
        modal.classList.add("display__mode")    
    }
    if (window.pageYOffset + document.documentElement.clientHeight <= document.documentElement.scrollHeight / 100 * 47 - 10){
        modal.classList.remove("display__mode")    
    }
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight / 100 * 47){
        modal.classList.add("modal__active")  
        
    }
    if(window.pageYOffset + document.documentElement.clientHeight <= document.documentElement.scrollHeight / 100 * 47){
        modal.classList.remove("modal__active")  
    }
    
}
window.addEventListener("scroll", showModalByScroll );


////////modal





const content = document.querySelector(".content");
const sliderWindow = document.querySelector(".carousel__slider");
const sliderWindowHeight = sliderWindow.getBoundingClientRect().height;

console.log(sliderWindowHeight);

// console.log(sliderWindowPosition);
// console.log(contentPosition)


window.addEventListener("scroll", () =>{

   let scrollTop = window.pageYOffset;


   let contentPosition = content.getBoundingClientRect().y;
   let contentCord = content.getBoundingClientRect().y +  window.pageYOffset;

   let sliderWindowPosition = sliderWindow.getBoundingClientRect().y
   const sliderWindowCord = sliderWindow.getBoundingClientRect().y +  window.pageYOffset;

    // console.log(contentPosition)
    // console.log(logoPosition)
    // console.log(contentCord)
    // console.log(sliderWindowCord)
    // console.log(sliderWindowCord - contentPosition )


//    console.log( sliderWindow.clientHeight + (sliderWindowCord - contentCord) + "px");
   let height = sliderWindow.clientHeight + (sliderWindowCord - contentCord);


    if(contentPosition - sliderWindowCord < 0){
       sliderWindow.style.height = height + "px";
       sliderWindow.style.height = sliderWindow.style.height = sliderWindow.clientHeight + (sliderWindowCord + contentCord);
    }
    if( sliderWindowCord - contentPosition < sliderWindowHeight){
      sliderWindow.style.height = 86 + "vh";
    }

})


////////////////hide logo

const logo = document.querySelector(".logo")

function hideLogoByScroll(){
    console.log( window.pageYOffset + document.documentElement.clientHeight)
    console.log(document.documentElement.scrollHeight);
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight / 100 *10){
        logo.classList.add("logoHide")  
        
    }  if (window.pageYOffset + document.documentElement.clientHeight <= document.documentElement.scrollHeight / 100 * 44){
        logo.classList.remove("logoHide")  
        
    }
}

window.addEventListener("scroll", hideLogoByScroll)


///////////////////////////////

console.log(document.querySelector(".location__street").outerText)



mapApi();

changeLanguage(langArr);


