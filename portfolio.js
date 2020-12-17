// JavaScript for Entire Portfolio


// Remove colour at interval
setInterval(remColor, 1000);
 
function remColor() {
    var image = document.getElementById("background");
    if (image.classList.contains("flicker") == false) {
        image.classList.add("flicker");
    }
}

// Set colour at interval
setInterval(getColor, 800)

function getColor() {
    var image = document.getElementById("background");
    if (image.classList.contains("flicker") == true) {
        image.classList.remove("flicker");
    }
}
