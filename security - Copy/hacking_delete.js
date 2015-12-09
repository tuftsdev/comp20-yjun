var map;
var myLocation;
var icon;
var contentString;

function init() {
	map = new google.maps.Map(document.getElementById('map'), {
	    center: {
	    	lat: 37.4528,
	    	lng: -122.1833
	    },
    	zoom: 8,
	    mapTypeId: google.maps.MapTypeId.ROADMAP});
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(sendLoc);

		}
}

var prev_infowindow = false;

function sendLoc(position) {
		// Move to new location
		myLocation = new google.maps.LatLng(position.coords.latitude, 
			position.coords.longitude);
		map.panTo(myLocation);
		var login = "CalvinGraham";
		var message = "The rent is too damn high";
		icon = new google.maps.Marker({
				position: myLocation, map: map, title: login,
				icon: "arrow.png"
		});
		icon.setMap(map);
		contentString = "<div id=login>" + login;
	  	var infowindow = new google.maps.InfoWindow({
	  			content: contentString
	  	});
	  	google.maps.event.addListener(icon, 'click', function() {
	  	if(prev_infowindow) {
	 		prev_infowindow.close();
	  	}
	  	prev_infowindow = infowindow;
	   	infowindow.open(map, this);
	 	});
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "https://fast-citadel-5360.herokuapp.com/sendLocation", true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send("login=" + login + "&lat=" + position.coords.latitude + "&lng=" + 
			position.coords.longitude + "&message=" + message);
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				var data = JSON.parse(xhr.responseText);
				format(data);
			}
		};
}

function format (data) {
	var i;
	for (i=0; i < data.length; i++) {
		create(data, i);
	}
}


function create (data, iter) {
		var lng = data[iter].lng;
		var lat = data[iter].lat;
		var landmark = new google.maps.LatLng(lat, lng);
		
		icon = new google.maps.Marker({
			position: landmark, map: map, title: data[iter].login
		});
		icon.setMap(map);
		contentString = "<div id=login>" + data[iter].login + "</div>" + 
		"<p>" + data[iter].message + "</p>" + "<p>" + "Distance: " + 
		distance(lat, lng) + " miles away" + "</p>";
	  	var infowindow = new google.maps.InfoWindow({
	  		content: contentString
	  	});
	  	google.maps.event.addListener(icon, 'click', function() {
	  	if(prev_infowindow) {
	 		prev_infowindow.close();
	  	}
	  	prev_infowindow = infowindow;
	   	infowindow.open(map, this);
	 	});
}

function distance (lat, lng) {
	mylat = myLocation.lat();
	mylng = myLocation.lng();
	var R = 6371 //kilometers
	var latdiff = mylat - lat;
	var radlat = toRad(latdiff);
	var lngdiff = mylng - lng;
	var radlng = toRad(lngdiff);
	var a = Math.sin(radlat/2) * Math.sin(radlat/2) + Math.cos(toRad(lat))
		* Math.cos(toRad(mylat)) * Math.sin(radlng/2) * Math.sin(radlng/2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	var d = R * c;
	return d/1.609344; //convert to miles

}

function toRad(num) {
	return num * Math.PI / 180;
}

