var x, y, map;
function getLocation(){
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(showPosition);
	}else{
		alert("Geolocation is not supported by this browser. Please enable it or use a newer browser, so we can help you find a bar");
	}
}

function showPosition(position){
	x = position.coords.latitude;
	y = position.coords.longitude;
}

function generateMap(){
	var mapOptions = {
			zoom: 8,
			center: new google.maps.LatLng(x, y),
			mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);
