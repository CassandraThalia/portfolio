
setInterval(remColor, 500);
 
function remColor() {
    var image = document.getElementById("background");
    if (image.classList.contains("flicker") == false) {
        image.classList.add("flicker");
    }
}

setInterval(getColor, 650)

function getColor() {
    var image = document.getElementById("background");
    if (image.classList.contains("flicker") == true) {
        image.classList.remove("flicker");
    }
}



