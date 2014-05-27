var desktop = document.getElementById("desktop");
var height = desktop.offsetWidth * screen_height / screen_width;
var margin_height = document.getElementById("display").offsetHeight * 0.5;
document.getElementById("floater").style.marginBottom = -margin_height +"px";
desktop.style.lineHeight = height + "px";
desktop.innerHTML = screen_width + "×" + screen_height;