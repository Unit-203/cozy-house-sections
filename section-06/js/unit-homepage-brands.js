let slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let section = document.getElementById("section");
    let container = document.getElementById("wrapper");
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0.9";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    const containerWidth = container.clientWidth;
    const sectionWidth = section.clientWidth;
    const slideWidth = slides[slideIndex - 1].clientWidth;
    let marginLeft = -(slideIndex - 1) * slideWidth;
    if (sectionWidth > containerWidth + marginLeft) {
        marginLeft = -(containerWidth - sectionWidth);
    }
    container.style.marginLeft = `${marginLeft}px`;
    slides[slideIndex - 1].style.opacity = "1";
    dots[slideIndex - 1].className += " active";
}

showSlides(slideIndex);
