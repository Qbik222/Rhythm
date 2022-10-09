function hideLogo(){
    const logo = document.querySelector(".logo")
    const slider = document.querySelector(".slider__item")

    function hideLogoByScroll(){
        let contentPosition = slider.getBoundingClientRect().y;
        let logoHeight = logo.getBoundingClientRect().height;
        // console.log(logoHeight)
        if (contentPosition <= logoHeight){
            logo.classList.add("logoHide")  
            
        }  if (contentPosition > logoHeight){
            logo.classList.remove("logoHide")  
            
        }
    }

    window.addEventListener("scroll", hideLogoByScroll)
}

export default hideLogo;