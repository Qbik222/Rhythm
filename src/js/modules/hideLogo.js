function hideLogo(content){
    const logo = document.querySelector(".logo")
    const slider = document.querySelector(".slider__item")


    function hideLogoByScroll(){
        let contentPosition = content.getBoundingClientRect().y;
        let sliderPosition = slider.getBoundingClientRect().y;
        let logoHeight = logo.getBoundingClientRect().height;
        // console.log(contentPosition - logoHeight)
        if (sliderPosition <= logoHeight ){
            logo.classList.add("logoHide")  
            
        }  
        if (sliderPosition >= logoHeight ){
            logo.classList.remove("logoHide")  
            
        }
        if(contentPosition < logoHeight){
            logo.classList.add("logoHide")  
        }
    }

    window.addEventListener("scroll", hideLogoByScroll)
}

export default hideLogo;