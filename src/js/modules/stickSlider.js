function stickSlider(){
    
const content = document.querySelector(".content");
const sliderWindow = document.querySelector(".carousel__slider");
const sliderWindowHeight = sliderWindow.getBoundingClientRect().height;

console.log(sliderWindowHeight);

// console.log(sliderWindowPosition);
// console.log(contentPosition)


window.addEventListener("scroll", () =>{

   let scrollTop = window.pageYOffset;


   let contentPosition = content.getBoundingClientRect().y;
   let contentCord = content.getBoundingClientRect().y +  window.pageYOffset;

   let sliderWindowPosition = sliderWindow.getBoundingClientRect().y
   const sliderWindowCord = sliderWindow.getBoundingClientRect().y +  window.pageYOffset;

    // console.log(contentPosition)
    // console.log(logoPosition)
    // console.log(contentCord)
    // console.log(sliderWindowCord)
    // console.log(sliderWindowCord - contentPosition )


//    console.log( sliderWindow.clientHeight + (sliderWindowCord - contentCord) + "px");
   let height = sliderWindow.clientHeight + (sliderWindowCord - contentCord);


    if(contentPosition - sliderWindowCord < 0){
       sliderWindow.style.height = height + "px";
       sliderWindow.style.height = sliderWindow.style.height = sliderWindow.clientHeight + (sliderWindowCord + contentCord);
    }
    if( sliderWindowCord - contentPosition < sliderWindowHeight){
      sliderWindow.style.height = 86 + "vh";
    }

})

}


export default stickSlider;