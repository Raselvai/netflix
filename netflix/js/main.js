/*
 * Template Name: Netflix with HTML5 CSS3 Bootstrap!
 * Version: 1.0
 * Copyright 2025

===========================================
    
    All jQuery section Include: 

    01. slider start
    
===========================================


*/


(function ($) {
    "use strict";

    $(document).ready(function () {

        //01. slider start
        function default_home_carouselInit() {
            $('.owl-carousel.trending_active').owlCarousel({
                dots: false,
                loop: false,
                margin: 40,
                stagePadding: 0,
                animateOut: 'fadeOut',
                nav: true,
                navText: ['<i class="far fa-chevron-left"></i>','<i class="far fa-chevron-right"></i>'],
                // items: 1,
                autoWidth: true,
                autoplay: true,
                autoplayTimeout: 4000,
                smartSpeed:4000,
                autoplayHoverPause: false,
            });
        }
        default_home_carouselInit();



    });

})(jQuery);