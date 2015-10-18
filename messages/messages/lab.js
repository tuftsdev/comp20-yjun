function parse() {
	var xmlhttp = new XMLHttpRequest();
	var url = "data.json";

	console.log("YOOOO");



	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		xmlhttp.open("GET", url,true );
		xmlhttp.send();
		console.log(xmlhttp.response);
		var myArr = JSON.parse(xmlhttp.responseText);
		console.log("Done parsing?");
		console.log(myArr);
	}

	

}