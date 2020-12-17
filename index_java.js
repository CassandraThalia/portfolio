// JavaScript for INDEX Page

// Set timeout to change pages
window.setTimeout(function(){
    window.location.href = "about.html";
}, 4000);

// Set timeout to fade letters
window.setTimeout(function(){
    var body = document.getElementById("largeHeader")
    body.classList.add("fadeOut")
}, 1000);

