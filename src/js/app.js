import hideLogo from "./modules/hideLogo.js";
import stickSlider from "./modules/stickSlider.js";
import asideShow from "./modules/aside.js";
import menuBurger from "./modules/menuBurger.js"
import slider from "./modules/slider.js";
import langArr from "./lang.js"
import changeLanguage from "./modules/changeLng.js";
import mapApi from "./modules/mapsApi.js";
import * as flsFunctions from "./modules/functions.js";

    flsFunctions.isWebp();
    slider();
    menuBurger();
    asideShow();
    stickSlider();
    hideLogo();
    mapApi();

    changeLanguage(langArr);


