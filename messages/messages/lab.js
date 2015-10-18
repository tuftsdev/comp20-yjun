function parse () {
	console.log("YO");
	var xmlhttp = new XMLHttpRequest();
	var url = "data.json"
	xmlhttp.open("GET", url, true);

	var jsondata = JSON.parse(xmlhttp.responseText);
/*	for (var i = 0; i < jsondata.length; i++) {
		console.log ("HEY");
	}
*/


};

