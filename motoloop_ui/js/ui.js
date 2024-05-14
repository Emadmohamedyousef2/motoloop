var Motoloop = {};
$(window).load(function() {
    $('body').toggleClass('loaded');

    $('.animate').bind('inview', function(event, isInView) {
        if (isInView) {

            var animate = $(this).attr('data-animation');
            var speedDuration = $(this).attr('data-duration');
            var $t = $(this);
            setTimeout(function() { $t.addClass(animate + ' animated'); }

                , speedDuration);
        } else {
            var $t = $(this);
            var animate = $(this).attr('data-animation');

            $t.removeClass(animate + ' animated');

        }

    });
});
Motoloop.header = function() {
    jQuery(window).resize(function() {
        sticky_header();
    });
    sticky_header();

    function sticky_header() {
        var $header = $('#header');
        var $height = ($(window).height()) - 250;

        $(window).on("scroll", function() {
            if ($(this).scrollTop() > $height) {
                $header.addClass("fixed__header");
            } else {
                $header.removeClass("fixed__header");
                $('.main_menu_box').removeClass('expanded');
                $('.nav-link').removeClass('active1');
                $('.main_menu_box .container').css({
                    "height": "0px",
                    "transition": "height .2s ease-in-out 0s"
                });
            }
        });
    }
}
Motoloop.mainBanner = function() {

    $('.banner__slider').on('init', function(slick) {

        setTimeout(function() {
            $('.banner__slider').find('.slide-animation').removeClass('fadeInLeft');
            $('.banner__slider .slick-current').addClass('fadeInLeft');

        }, 700);
    });
    $('.banner__slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: !0,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,


        prevArrow: '<a class="slick-arrow slick-prev" aria-label="Previous"><i class="ico-arr-left"></i></a>',
        nextArrow: '<a class="slick-arrow slick-next" aria-label="Next"><i class="ico-arr-right"></i></a>',
    });

    $('.banner__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {

        $('.banner__slider .slick-slide:nth-child(2)').find('.slide-animation').removeClass(' fadeInLeft');
        setTimeout(function() {

            $('.banner__slider').find('.slide-animation').removeClass('fadeInLeft');
            $('.banner__slider .slick-current').find('.slide-animation').addClass('fadeInLeft');
        }, 700);
    });
    $('.banner__slider .slick-arrow').click(function() {
        $('.banner__slider .slick-slide:nth-child(2)').find('.slide-animation').removeClass(' fadeInLeft');
        $('.banner__slider').find('.slide-animation').removeClass('fadeInLeft');

        setTimeout(function() {
            $('.banner__slider').find('.slide-animation').removeClass('fadeInLeft');
            $('.banner__slider .slick-current').find('.slide-animation').addClass('fadeInLeft');
        }, 700);
    });
}
Motoloop.Products = function() {

    $('.list__products').slick({

        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 5000,
        prevArrow: '<a class="slick-arrow slick-prev" aria-label="Previous"><i class="ico-arr-left"></i></a>',
        nextArrow: '<a class="slick-arrow slick-next" aria-label="Next"><i class="ico-arr-right"></i></a>',
    });
}

Motoloop.initialize = function() {

    Motoloop.mainBanner();
    Motoloop.Products();
    Motoloop.header();


};

jQuery(document).ready(function() {
    Motoloop.initialize();

});