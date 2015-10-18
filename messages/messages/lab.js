function parse() {
	var xmlhttp = new XMLHttpRequest();
	var url = "data.json";
	console.log("YOOOO");

	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		var myArr = JSON.parse(xmlhttp.response.Text);
		console.log("Done parsing?");
		console.log(myArr);
	}
	

}