$('.unit-homepage-trending__wrapper').slick({
    infinite: true,
    autoplay: false,
    arrows: true,
    dots: false,
    centerMode: true,
    slidesToShow: 4,
    prevArrow: '<span class="unit-homepage-trending__prev"></span>',
    nextArrow: '<span class="unit-homepage-trending__next"></span>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});
