function hideLogo(content, slider){
    const logo = document.querySelector(".logo")
    if (window.innerWidth < 1030 && window.innerWidth > 868){
        slider = content;
    }
    if (document.title !== "Rhythm"){
        slider = content;
    }

    function hideLogoByScroll(){
        let sliderPosition = slider.getBoundingClientRect().y;
        let logoHeight = logo.getBoundingClientRect().height;

        if (sliderPosition <= logoHeight ){
            logo.classList.add("logoHide")  
            
        }  
        if (sliderPosition >= logoHeight ){
            logo.classList.remove("logoHide")  
            
        }
     
    }

    window.addEventListener("scroll", hideLogoByScroll)
}

export default hideLogo;