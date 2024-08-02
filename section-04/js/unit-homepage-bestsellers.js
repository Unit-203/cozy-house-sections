$('.unit-homepage-bestsellers__wrapper').slick({
    infinite: true,
    autoplay: false,
    arrows: true,
    dots: false,
    centerMode: false,
    slidesToShow: 4,
    prevArrow: '<span class="unit-homepage-bestsellers__prev"></span>',
    nextArrow: '<span class="unit-homepage-bestsellers__next"></span>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: true,
                centerMode: false,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                arrows: true,
                centerMode: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: false,
                slidesToShow: 1
            }
        }
    ]
});
