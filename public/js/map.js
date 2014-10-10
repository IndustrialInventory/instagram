var map = L.map('map', {
	minZoom: 5
}).setView([39.289634, -76.615113], 13);

map.setMaxBounds(
	L.latLngBounds(L.latLng(-90, -180), L.latLng(90, 180))
);

L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	id: 'hoganmaps.ikkpodh4'
}).addTo(map);

// var rightSidebar = L.control.sidebar('sidebar-right', {
//     position: 'right'
// });

// map.addControl(rightSidebar);

var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};
function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties) {
        layer.bindPopup(feature.properties.tweet_text + '</br></br><img src="' + feature.properties.tweet_media_media_url + '" width="300px" onerror="console.log("error");>');
    }
}
map.on('moveend', function(){
	console.log(map.getZoom())
	var neY = map.getBounds()._northEast.lat,
		neX = map.getBounds()._northEast.lng,
		swY = map.getBounds()._southWest.lat,
		swX = map.getBounds()._southWest.lng;
	$.getJSON('/api/v1/artWithin?neX='+neX+'&neY='+neY+'&swX='+swX+'&swY='+swY, function (data) {
		L.geoJson(data, {
			pointToLayer: function (feature, latlng) {
		        return L.circleMarker(latlng, geojsonMarkerOptions);
		    },
		    onEachFeature: onEachFeature
		}).addTo(map);
	});
})