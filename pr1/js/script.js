$(document).ready(function(){
    $('.slider-main').slick({
    //   setting-name: setting-value
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000
    });
 

    $('.slider-products').slick({ 
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
         {
             breakpoint: 600,
             settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
             arrows: false
            }
        }
        ]
    });




});

 