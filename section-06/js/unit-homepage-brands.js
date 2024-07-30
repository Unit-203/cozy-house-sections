let s6slideIndex = 1;

// Next/previous controls
function s6plusSlides(n) {
    s6showSlides(s6slideIndex += n);
}

// Thumbnail image controls
function s6currentSlide(n) {
    s6showSlides(s6slideIndex = n);
}

function s6showSlides(n) {
    let i;
    let section = document.getElementById("s6section");
    let container = document.getElementById("s6wrapper");
    let slides = document.getElementsByClassName("s6slide");
    let dots = document.getElementsByClassName("s6dot");
    if (n > slides.length) { s6slideIndex = 1 }
    if (n < 1) { s6slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0.9";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    const containerWidth = container.clientWidth;
    const sectionWidth = section.clientWidth;
    const slideWidth = slides[s6slideIndex - 1].clientWidth;
    let marginLeft = -(s6slideIndex - 1) * slideWidth;
    if (sectionWidth > containerWidth + marginLeft) {
        marginLeft = -(containerWidth - sectionWidth);
    }
    container.style.marginLeft = `${marginLeft}px`;
    slides[s6slideIndex - 1].style.opacity = "1";
    dots[s6slideIndex - 1].className += " active";
}

s6showSlides(s6slideIndex);
