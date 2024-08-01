$('.unit-homepage-collections__wrapper').slick({
    infinite: true,
    autoplay: false,
    arrows: false,
    dots: true,
    centerMode: false,
    slidesToShow: 5,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '',
                slidesToShow: 4
            }
        },
        {
            breakpoint: 992,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '',
                slidesToShow: 1
            }
        }
    ]
});

