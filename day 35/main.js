var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex - 1].style.display = "block";
}

function showslides(n) {
    showSlides(slideIndex += n);
}

function plusslides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

setInterval(function() {
    plusslides(1);
}, 3000);

showSlides(1);