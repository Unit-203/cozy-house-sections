$('.unit-homepage-collections__wrapper').slick({
    infinite: true,
    autoplay: false,
    arrows: false,
    dots: false,
    centerMode: false,
    slidesToShow: 5,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                dots: true,
                arrows: false,
                centerMode: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                dots: true,
                arrows: false,
                centerMode: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                dots: true,
                arrows: false,
                centerMode: false,
                slidesToShow: 1
            }
        }
    ]
});

