$('.unit-homepage-collections__wrapper').slick({
    infinite: true,
    autoplay: false,
    arrows: false,
    dots: false,
    centerMode: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: true,
                arrows: false,
                centerMode: false,
                centerPadding: '',
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                dots: true,
                arrows: false,
                centerMode: false,
                centerPadding: '',
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

