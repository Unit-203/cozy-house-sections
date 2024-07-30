let s1slideIndex = 1;

// Next/previous controls
function s1plusSlides(n) {
    s1showSlides(s1slideIndex += n);
}

// Thumbnail image controls
function s1currentSlide(n) {
    s1showSlides(s1slideIndex = n);
}

function s1showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("s1slide");
    let dots = document.getElementsByClassName("s1dot");
    if (n > slides.length) { s1slideIndex = 1 }
    if (n < 1) { s1slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" s1active", "");
    }
    slides[s1slideIndex - 1].style.display = "block";
    dots[s1slideIndex - 1].className += " s1active";
}

s1showSlides(s1slideIndex);
