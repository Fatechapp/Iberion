
//toggle
const body = document.querySelector('body')
const toggle = document.getElementById('toggle')
const penyelenggara = document.getElementById('Penyelenggara');
const gambaran = document.getElementById('Gambaran')
toggle.onclick = function() {
    toggle.classList.toggle('active')
    body.classList.toggle('active')
    penyelenggara.classList.toggle('active')
    gambaran.classList.toggle('active')
    // alert("Fitur belum tersedia")
    errorAllert.style.display = 'block';
    setTimeout(function() {
        errorAllert.style.display = 'none';
    }, 1000);
}

//error-allert
const errorAllert = document.getElementById('error-allert')
errorAllert.style.display = 'none';
