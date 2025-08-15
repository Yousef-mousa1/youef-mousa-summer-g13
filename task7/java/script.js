$(document).ready(function(){
   $(".owl-carousel").owlCarousel({
    items:5,
    loop:true,
    autoplay:true,
    
    nav:true,
    navText : [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ],
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:5
      }
    }
   }
   );
  });
  function changeImg(element){
   let img = document.getElementById('card-img')
    img.src = element.src
} 
$(document).ready(function(){
  function initBlogCarousel(){
    if ($(window).width() < 768) {
      if (!$('#blog-carousel').hasClass('owl-loaded')) {
        $('#blog-carousel').addClass('owl-carousel').owlCarousel({
          items: 1,
          margin: 10,
          loop: true,
          nav: true,
          dots: true
        });
      }
    } else {
      if ($('#blog-carousel').hasClass('owl-loaded')) {
        $('#blog-carousel').trigger('destroy.owl.carousel')
                           .removeClass('owl-carousel owl-loaded');
        $('#blog-carousel').find('.owl-stage-outer').children().unwrap();
      }
    }
  }

  initBlogCarousel();
  $(window).resize(initBlogCarousel);
});
let scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
    let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollPercent = (window.scrollY / scrollHeight) * 100;
    if (scrollPercent > 30) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

scrollBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};