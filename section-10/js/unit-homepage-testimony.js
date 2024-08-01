$('.unit-homepage-testimony__wrapper').slick({
    infinite: true,
    autoplay: false,
    arrows: true,
    dots: false,
    centerMode: false,
    slidesToShow: 3,
    prevArrow: '<span class="unit-homepage-testimony__prev"></span>',
    nextArrow: '<span class="unit-homepage-testimony__next"></span>',
    responsive: [
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
