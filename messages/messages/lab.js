function parse() {
	var xmlhttp = new XMLHttpRequest();
	var url = "data.json";
	console.log("YOOOO");

	var myArr = JSON.parse(xmlhttp.response.Text);
	
	console.log("Done parsing?");
	console.log(myArr);

}