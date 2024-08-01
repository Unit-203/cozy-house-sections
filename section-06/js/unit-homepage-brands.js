$('.unit-homepage-brands__wrapper').slick({
    infinite: true,
    autoplay: false,
    arrows: false,
    dots: true,
    centerMode: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

