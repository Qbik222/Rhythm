function hideLogo(content){
    const logo = document.querySelector(".logo")

    function hideLogoByScroll(){
        let contentPosition = content.getBoundingClientRect().y;
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