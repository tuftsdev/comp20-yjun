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
			for (var count = 0; count < parsed.length; count++) {
				console.log(Object.keys(parsed[count]));
				elem.innerHTML += "<p>" + parsed[count]["content"] 
					+ " " + parsed[count]["username"] + "</p>";
			}
		}


	}

	//asynchronous
	xmlhttp.open("GET", "data.json", true);
	xmlhttp.send();
	console.log("YAY");


}