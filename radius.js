document.onload = function(){
var x = document.getElementsByClassName("form")[0].clientHeight*13/100;
console.log(x);
document.getElementsByClassName("form")[0].style.borderRadius = x + "px"; 

}