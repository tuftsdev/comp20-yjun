function parse() {
	var xmlhttp = new XMLHttpRequest();

	console.log("YOOOO");

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState === 4) {
			console.log("CHEESE");
			var parser = JSON.parse(xmlhttp.responseText);

		}


	}

	//asynchronous
	xmlhttp.open("GET", "data.json", true);
	xmlhttp.send();
	console.log("YAY");


}