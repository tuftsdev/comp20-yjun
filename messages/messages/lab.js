function parse() {
	var xmlhttp = new XMLHttpRequest();
	var url = "data.json";

	console.log("YOOOO");


xmlhttp.open("GET", url,true );
		xmlhttp.send();
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		
		console.log(xmlhttp.response);
		var myArr = JSON.parse(xmlhttp.responseText);
		console.log("Done parsing?");
		console.log(myArr);
	}

	

}