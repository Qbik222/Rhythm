function asideShow(content){
    const modal = document.querySelector(".aside");
 


    function showModalByScroll (){

        let contentPosition = content.getBoundingClientRect().y;
      
        if (contentPosition <= 0){
            modal.classList.add("aside__active")  
            
        }
        if(contentPosition > 0){
            modal.classList.remove("aside__active")  
        }
        
    }
    window.addEventListener("scroll", showModalByScroll );

}

export default asideShow;