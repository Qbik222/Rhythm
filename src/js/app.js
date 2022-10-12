"use strict";

import formValidate from "./modules/formValidate.js";
import hideLogo from "./modules/hideLogo.js";
import stickSlider from "./modules/stickSlider.js";
import asideShow from "./modules/aside.js";
import menuBurger from "./modules/menuBurger.js"
import slider from "./modules/slider.js";
import langArr from "./lang.js"
import changeLanguage from "./modules/changeLng.js";
import mapApi from "./modules/mapsApi.js";
import * as flsFunctions from "./modules/functions.js";


document.addEventListener("DOMContentLoaded", () =>{

    const content = document.querySelector(".content");
    const title = document.title;
    const sliderItem = document.querySelector(".slider__item")



    if(title == "Rhythm"){
        flsFunctions.isWebp();
        slider();
        menuBurger();
        asideShow(content);
        stickSlider();
        hideLogo(content, sliderItem);
        mapApi();
        formValidate();
        changeLanguage(langArr);
    
    }else{
        flsFunctions.isWebp();
        menuBurger();
        asideShow(content);
        hideLogo(content);
        formValidate();
        changeLanguage(langArr);
    }

    
})

