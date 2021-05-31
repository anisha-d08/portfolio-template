/**
 *  --- Carousel Animation and functionality ---
 */

var slideIndex = 1;
showSlides(slideIndex);

function nextSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("project");
    var dash = document.getElementsByClassName("browse-dash");
    if (n > slides.length){ 
        slideIndex = 1;
    }
    if (n < 1){ 
        slideIndex = slides.length;
    }
    //sets every slide display to none
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //sets every dash to unactive
    for (i = 0; i < dash.length; i++){
        dash[i].className = dash[i].className.replace(" active", "");
    }
    //sets the new active slide and dash
    slides[slideIndex - 1].style.display = "block";
    dash[slideIndex - 1].className += " active";
}

/**
 *  ---- Carousel END ----
 */