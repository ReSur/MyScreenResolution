var mode;
var screen_width = screen.width;
var screen_height = screen.height;
if (screen_width == 1280 && screen_height == 800) {
	mode = "laptop";
}	//macbook pro
else if (screen_width == 768 && screen_height == 1024) {
	mode = "ipad";
}	//ipad
else if (screen_width < screen_height) {
	mode = "iphone";
}	//ipad
else {
	mode = "display";
}

document.write("<link rel='stylesheet' type='text\/css' href='" + mode + ".css' \/>");