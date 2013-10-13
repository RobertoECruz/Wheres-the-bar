var x, y, map, q;
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

	generateMap(x, y);
}

function generateMap(x, y){
	var mapOptions = {
		zoom: 8,
		center: q = new google.maps.LatLng(x, y),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	var request = {
		location: q,
		openNow: true,
		rankBy: google.maps.places.RankBy.DISTANCE,
		keyword: 'bar',
		types: ['food']
	};
	service = new google.maps.places.PlacesService(map);
	service.nearbySearch(request, barCallback);
}

function barCallback(results, status) {
	if (status == google.maps.places.PlacesServiceStatus.OK) {
		addMarker(results[0]);
	}
}


function addMarker(location) {
	marker = new google.maps.Marker({
		position: location.geometry.location,
		map: map
	});

	var contentString = '<div id="content"><div id="sitenotice"></div><h1 id="firstHeading" class="firstHeading">'+location.name+'</h1> </div> </div>'

	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});
	infowindow.open(map, marker);
}

google.maps.event.addDomListener(window, 'load', getLocation);
