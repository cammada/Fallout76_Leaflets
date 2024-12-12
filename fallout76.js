    //Map intialization
    var map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: -3
        });
    
        var bounds = [[0,0], [4096,4096]];
        var image = L.imageOverlay('Fallout76_Map_4096x4096.png', bounds).addTo(map);
        map.fitBounds(bounds);
    
        var myIcon = L.icon({
            iconUrl: 'myicon.png',
            iconSize: [96, 96],
            iconAnchor: [96, 96],
            popupAnchor: [-3, -76],
        });
    
        function onMapClick(e){
            //Add Marker & draggable
            var popup = L.popup(e.latlng, {content: `Position: ${e.latlng}`, minWidth: 50, maxWidth: 300, minHeight: 5, maxHeight: 300})
    
            L.marker(e.latlng, {icon: myIcon, draggable: true}).addTo(map).bindPopup(popup);
        }
        map.on('click',onMapClick)