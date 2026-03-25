// IMAGE SLIDER
let slides = document.querySelectorAll(".slide");
let currentIndex = 0;

// DETAILS SLIDER
let details = document.querySelectorAll(".detail");
let detailIndex = 0;

// INIT
slides[0].classList.add("active");
details[0].classList.add("active");

function changeAll() {

    // IMAGE CHANGE
    slides.forEach(s => s.classList.remove("active"));
    slides[currentIndex].classList.add("active");
    currentIndex = (currentIndex + 1) % slides.length;

    // DETAILS CHANGE
    details.forEach(d => d.classList.remove("active"));
    details[detailIndex].classList.add("active");
    detailIndex = (detailIndex + 1) % details.length;
}

// RUN EVERY 2 SECONDS
setInterval(changeAll, 2000);
