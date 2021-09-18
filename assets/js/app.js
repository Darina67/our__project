$(function(){
  var header = $("#header"),
   introH = $("#intro").innerHeight(),
   scrollOffset =   $(window).scrollTop();

  //  fixed Header
   checkScroll(scrollOffset);


  $(window).on("scroll", function() {

      scrollOffset = $(this).scrollTop();

      checkScroll(scrollOffset);
      
      });

      function checkScroll(scrollOffset){

          console.log(scrollOffset);
  
          if( scrollOffset >= introH) {
              header.addClass("fixed");
  
          }
          else{
              header.removeClass("fixed");
          }
      }
  //  
  // swiper js
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
