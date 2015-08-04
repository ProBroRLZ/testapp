var header;
var height;
function loadup(){
    header = document.getElementById("header");
    height = document.getElementById("logocontainer").clientHeight;
console.log(height);
console.log(header);
}
function test(){
    
    
    if(window.pageYOffset > height){
        header.classList.add("scroll");
    }
    else{
        header.classList.remove("scroll");
    }
}
