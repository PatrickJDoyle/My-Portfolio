function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 53.399560, lng: -6.668634};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 9,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Kildare, IRE' // Title Location
    });
}