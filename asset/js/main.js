$(document).ready(function(){
  $(".slider-wrapper").owlCarousel();
});
$(document).ready(function(){
  $(".slider-wrapper").owlCarousel();
});

$('.slider-wrapper').owlCarousel({
  items:1,
  loop:true,
  margin:20,
  autoplay:true,
  autoplayTimeout:1000,
  autoplayHoverPause: false
});



$(document).ready(function(){
    $(".blog-carousel").owlCarousel();
  });

  $('.blog-carousel').owlCarousel({
    items:4,
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
    }
});


$(document).ready(function(){
  $(".logo-carousel").owlCarousel();
});

$('.logo-carousel').owlCarousel({
  items:7,
  loop:true,
  margin:10,
  autoplay:true,
  autoplayTimeout:500,
  autoplayHoverPause:true,
  responsive:{
    0:{
        items:3
    },
    600:{
        items:4
    },
    1000:{
        items:7
    }
  }
});