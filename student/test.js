var header;
var height;
function loadup(){
    header = document.getElementById("header");
    height = document.getElementById("logocontainer").clientHeight;
console.log(height);
console.log(header);
}

var scrollTimer = -1;

function test() {
    header.classList.add("scroll");

    if (scrollTimer != -1)
        clearTimeout(scrollTimer);

    scrollTimer = window.setTimeout("scrollFinished()", 500);
}

function scrollFinished() {
    header.classList.remove("scroll");
}
