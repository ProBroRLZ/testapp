document.getElementById("logofull").onload = function(){

var h = document.getElementById("logofull").offsetHeight;
document.getElementById("center").style.height = window.innerHeight - document.getElementById("logofull").offsetHeight;
var heightstuff = window.innerHeight*8/100
document.getElementsByClassName("form")[0].style.height = heightstuff + "px";
document.getElementsByClassName("form")[1].style.height = heightstuff + "px";
document.getElementsByClassName("form")[2].style.height = heightstuff + "px";

document.getElementsByClassName("form")[0].style.fontSize = (heightstuff/2.5) + "px";
document.getElementsByClassName("form")[1].style.fontSize = (heightstuff/2.5) + "px";
document.getElementsByClassName("form")[2].style.fontSize = (heightstuff/2.5) + "px";
	
}