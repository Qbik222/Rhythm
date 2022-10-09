function menuBurger(){
    const menu = document.querySelector(".header__menu-panel");
    const menuBtn = document.querySelectorAll(".header__menu");
    const burger = document.querySelector(".header__burger");


    menuBtn.forEach(item =>{
        item.addEventListener("click", () =>{
            console.log("click")
            menu.classList.toggle("menu__open");
            burger.classList.toggle("burger__open");
            burger.classList.toggle("header__burger")
            document.querySelector(".open").classList.toggle("btn__active");
            document.querySelector(".close").classList.toggle("btn__active");
            document.querySelector("body").classList.toggle("lock");

        });
    })
}

export default menuBurger;