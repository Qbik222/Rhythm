function hideLogo(){
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
}

export default hideLogo;