function asideShow(){
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

}

export default asideShow;