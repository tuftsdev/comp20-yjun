function parse() {
	var xmlhttp = new XMLHttpRequest();

	console.log("YOOOO");

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState === 4) {
			console.log("CHEESE");
			var parsed = JSON.parse(xmlhttp.responseText);
			console.log(parsed);
			//console.log(xmlhttp.responseText);

			var elem = document.getElementById("messages");
			for (var i = 0; i < parsed.length; count++) {
				console.log(Object.keys(parsedObjects[count]));

			}
		}


	}

	//asynchronous
	xmlhttp.open("GET", "data.json", true);
	xmlhttp.send();
	console.log("YAY");


}