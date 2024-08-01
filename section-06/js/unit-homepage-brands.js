$('.unit-homepage-brands__wrapper').slick({
    infinite: true,
    autoplay: false,
    arrows: false,
    dots: true,
    centerMode: false,
    slidesToShow: 4,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

