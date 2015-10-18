function parse() {
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState === 4) {
			var parsed = JSON.parse(xmlhttp.responseText);
			console.log(parsed);
			//console.log(xmlhttp.responseText);

			var elem = document.getElementById("messages");
			for (var count = 0; count < parsed.length; count++) {
				elem.innerHTML += "<p>" + parsed[count]["content"] 
					+ "      " + 
					"<span>" + parsed[count]["username"] + "</span>" 
					+ "</p>";
			}
		}


	}

	var url = "data.json";
	//var url = "http://messagehub.herokuapp.com/messages.json";
	//asynchronous
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}