function parse() {
	var xmlhttp = new XMLHttpRequest();

	console.log("YOOOO");

	xmlhttp.onreadystatechange = function() {
		if (this.readyState === 4) {
			console.log("CHEESE");
		}


	}

	//asynchronous
	xmlhttp.open("GET", "data.json", true);
	xmlhttp.send();
	console.log(xmlhttp.responseText);
/*
		
		var myArr = JSON.parse(xmlhttp.responseText);
	
	*/

}