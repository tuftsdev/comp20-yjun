function init() {
	var canvas = document.getElementById('game_canvas');
	var ctx = canvas.getContext('2d');
	// Assume that the content is displayed in broswers 
	// that DO support <canvas>

	var img = new Image();
	img.src = "duckhunt-background.gif";

	ctx.drawImage(img, 0, 0, 600, 800);

	// Draw Slice
	//ctx.drawImage(img, 50, 50, 50, 50,
	//	50, 50, 50, 50);

	// Draw frame
//	ctx.drawImage(img, 0, 0);

}
