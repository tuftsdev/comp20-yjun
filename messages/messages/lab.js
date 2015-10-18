function parse() {
	var xmlhttp = new XMLHttpRequest();

	console.log("YOOOO");


	xmlhttp.open("GET", "data.json", true);
	xmlhttp.send();
	console.log(xmlhttp.responseText);

	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		
		var myArr = JSON.parse(xmlhttp.responseText);
		console.log("Done parsing?");
		console.log(myArr);
	}

	

}