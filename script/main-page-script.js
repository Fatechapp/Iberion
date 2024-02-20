
//toggle
const body = document.querySelector('body')
const toggle = document.getElementById('toggle')
const penyelenggara = document.getElementById('Penyelenggara');
const gambaran = document.getElementById('Gambaran')
const  tema = document.getElementById('Tema-dan-Sub-Tema')
const  babak = document.getElementById('Babak')
const  sponsor = document.getElementById('Sponsor')
const  booklet = document.getElementById('Booklet')
toggle.onclick = function() {
    toggle.classList.toggle('active')
    body.classList.toggle('active')
    penyelenggara.classList.toggle('active')
    gambaran.classList.toggle('active')
    tema.classList.toggle('active')
    babak.classList.toggle('active')
    sponsor.classList.toggle('active')
    booklet.classList.toggle('active')
    // alert("Fitur belum tersedia")
    errorAllert.style.display = 'block';
    setTimeout(function() {
        errorAllert.style.display = 'none';
    }, 1000);
}

//error-allert
const errorAllert = document.getElementById('error-allert')
errorAllert.style.display = 'none';

// Navigation Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Scroll To Top button
// script.js
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const scrollButton = document.getElementById("scroll-up-button");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}

function scrollToTop() {
    // Menggunakan requestAnimationFrame() untuk animasi scroll
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentScroll - currentScroll / 5); // Mengurangi perlahan scroll sebelum mencapai atas
    }
}
