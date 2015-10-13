function init() {
	var canvas = document.getElementById('game_canvas');
	var ctx = canvas.getContext('2d');
	// Assume that the content is displayed in broswers 
	// that DO support <canvas>

	var img = new Image();
	img.addEventListener("load", function() {
		// drawing the background image
		ctx.drawImage(img, 0, 0, 512, 480);
		// slicing and drawing first bird
		ctx.drawImage(birds, 42, 117, 38, 30, 175, 140, 80, 60);
		// slicing and drawing second bird
		ctx.drawImage(birds, 125, 120, 38, 30, 300, 100, 80, 60);
	}, false);


	img.src = "duckhunt-background.gif";
	var birds = new Image();
	birds.src = "duckhunt_various_sheet.png";

}
