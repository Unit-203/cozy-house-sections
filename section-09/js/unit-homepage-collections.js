let s9slideIndex = 1;

// Next/previous controls
function s9plusSlides(n) {
    s9showSlides(s9slideIndex += n);
}

// Thumbnail image controls
function s9currentSlide(n) {
    s9showSlides(s9slideIndex = n);
}

function s9showSlides(n) {
    let i;
    let section = document.getElementById("s9section");
    let container = document.getElementById("s9wrapper");
    let slides = document.getElementsByClassName("s9slide");
    let dots = document.getElementsByClassName("s9dot");
    if (n > slides.length) { s9slideIndex = 1 }
    if (n < 1) { s9slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0.9";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    const containerWidth = container.clientWidth;
    const sectionWidth = section.clientWidth;
    const slideWidth = slides[s9slideIndex - 1].clientWidth;
    let marginLeft = -(s9slideIndex - 1) * slideWidth;
    if (sectionWidth > containerWidth + marginLeft) {
        marginLeft = -(containerWidth - sectionWidth);
    }
    container.style.marginLeft = `${marginLeft}px`;
    slides[s9slideIndex - 1].style.opacity = "1";
    dots[s9slideIndex - 1].className += " active";
}

s9showSlides(s9slideIndex);