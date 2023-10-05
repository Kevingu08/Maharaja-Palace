function init(){
   
    var swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // init: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        
        slidesPerView: 1,
        spaceBetween: 40,
      
        breakpoints: {
          620: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          680: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          920: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1240: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        } 
        });
}

document.addEventListener("DOMContentLoaded", function(){

    init()
    
});