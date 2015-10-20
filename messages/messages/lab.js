function parse () {
	var xmlhttp = new XMLHttpRequest();
	var url = "data.json"

	// Step 1: Set up HTTP request
	xmlhttp.open("GET", url, true);

	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var jsondata = JSON.parse(xmlhttp.responseText);
			elem = document.getElementById("messages");

		for (var count = 0; count < jsondata.length; count++) {
			elem.innerHTML += "<p>" + jsondata[count]["content"] +  "     " + 
				"<span>" + jsondata[count]["username"] + "</span>" + "</p>";
			}
		}
	}

	xmlhttp.open("GET", url, true);
	xmlhttp.send();

	

}

