var OSM = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#836953",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var myBigfoot = L.geoJSON(bigfootsightings, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions).bindPopup(
            ' Hello! You have clicked on Bigfoot Sighting: ' 
            + feature.properties.name 
            + '. '
            + ' Located at: '
            + feature.properties.location
            +' '
            + latlng
            +'. '
            + 'With description: '
            + feature.properties.description);
    }
}).addTo(map);


var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    })

var baseLayers = {
"OpenStreetMap": OSM,
"ESRI": Esri_WorldImagery
};

var overlayMaps = {
"Bigfoot Sightings": myBigfoot
};

var layerControl = L.control.layers(baseLayers,overlayMaps).addTo(map);



