function parse() {
	var xmlhttp = new XMLHttpRequest();
	var url = "data.json";

	console.log("YOOOO");


	xmlhttp.open("GET", url,true );
	xmlhttp.send();
			console.log(xmlhttp.response);

	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		
		var myArr = JSON.parse(xmlhttp.responseText);
		console.log("Done parsing?");
		console.log(myArr);
	}

	

}