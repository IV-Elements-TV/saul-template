document.addEventListener("DOMContentLoaded", function(e) {
   if (window.innerWidth > 992) {
       new WOW().init();
       $('.banner-content h1').addClass('fadeIn');
       $('.banner-content h2').addClass('slideInLeft');
       $('.banner-content p').addClass('slideInRight');
       $('.banner-content-buttons').addClass('fadeIn');
       $('.banner-phone').addClass('slideInUp');
       $('.feature-box-left').addClass('slideInLeft');
       $('.features-app').addClass('fadeIn');
       $('.feature-box-right').addClass('slideInRight');
       $('.standard-price-box').addClass('slideInUp');
       $('.popular-price-box').addClass('slideInUp');
       $('.download-btn').addClass('fadeIn'); 
       $('.footer-social-icons').addClass('bounce');         
   }
});