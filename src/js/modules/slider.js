
function slider(){
    const itemSlides = document.querySelectorAll(".slider__item");
    let currentSlide = 0;
    let sliderTime = 3000;
   
   
   
   for (let i = 0; i < itemSlides.length; i++){
       itemSlides[i].classList.add("opacityZero");
   }
   itemSlides[currentSlide].classList.remove("opacityZero");
   
   function slider() {
       for (let i = 0; i < itemSlides.length; i++){
           itemSlides[i].classList.add("opacityZero");
       }
       itemSlides[currentSlide].classList.remove("opacityZero");
       if(currentSlide + 1  == itemSlides.length){
           currentSlide = 0;
       }else{
           ++currentSlide
       }
   
   }
   
   let sliderInterval = setInterval(slider, sliderTime);
}

export default slider;