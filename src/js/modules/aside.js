function asideShow(content){
    const modal = document.querySelector(".modal");
 


    function showModalByScroll (){

        let contentPosition = content.getBoundingClientRect().y;
      
        if (contentPosition <= 0){
            modal.classList.add("modal__active")  
            
        }
        if(contentPosition > 0){
            modal.classList.remove("modal__active")  
        }
        
    }
    window.addEventListener("scroll", showModalByScroll );

}

export default asideShow;