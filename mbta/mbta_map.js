function init() {
        var iconBase = 'train_icon-v3.png'

        // Red Line Stations
        var southStation = new google.maps.LatLng(42.352271, -71.05524200000001);
        var andrew = new google.maps.LatLng(42.330154, -71.057655);
        var porterSquare = new google.maps.LatLng(42.3884, -71.11914899999999);
        var harvardSquare = new google.maps.LatLng(42.373362, -71.118956);
        var jfk_umass = new google.maps.LatLng( 42.320685, -71.052391);
        var savinHill = new google.maps.LatLng(42.31129, -71.053331);
        var parkStreet = new google.maps.LatLng(42.35639457, -71.0624242);
        var broadway = new google.maps.LatLng(42.342622, -71.056967);
        var northQuincy = new google.maps.LatLng(42.275275, -71.029583);
        var shawmut = new google.maps.LatLng(42.29312583, -71.06573796000001);
        var davis = new google.maps.LatLng(42.39674, -71.121815);
        var alewife = new google.maps.LatLng(42.395428, -71.142483);
        var kendall_mit = new google.maps.LatLng(42.36249079, -71.08617653);
        var charles_mgh = new google.maps.LatLng(42.361166, -71.070628);
        var downtownCrossing = new google.maps.LatLng(42.355518, -71.060225);
        var quincyCenter = new google.maps.LatLng(42.251809, -71.005409);
        var quincyAdams = new google.maps.LatLng(42.233391, -71.007153);
        var ashmont = new google.maps.LatLng(42.284652, -71.06448899999999);
        var wollaston = new google.maps.LatLng(42.2665139, -71.0203369);
        var fieldsCorner = new google.maps.LatLng(42.300093, -71.061667);
        var centralSquare = new google.maps.LatLng(42.365486, -71.103802);
        var braintree = new google.maps.LatLng(42.2078543, -71.0011385);
      
        var myOptions = {
          zoom: 13,
          center: southStation,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        
        var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

        // Create a marker        
        var southStation_marker = new google.maps.Marker({
          position: southStation,
          title: "South Station",
          icon: iconBase
        });
        southStation_marker.setMap(map);

        var andrew_marker = new google.maps.Marker({
          position: andrew,
          title: "Andrew",
          icon: iconBase
        });
        andrew_marker.setMap(map);

        var porterSquare_marker = new google.maps.Marker({
          position: porterSquare,
          title: "Porter Square",
          icon: iconBase
        });
        porterSquare_marker.setMap(map);

        var harvardSquare_marker = new google.maps.Marker({
          position: harvardSquare,
          title: "Harvard Square",
          icon: iconBase
        });
        harvardSquare_marker.setMap(map);

        var jfk_umass_marker = new google.maps.Marker({
          position: jfk_umass,
          title: "JFK/UMASS",
          icon: iconBase
        });
        jfk_umass_marker.setMap(map);

        var savinHill_marker = new google.maps.Marker({
          position: savinHill,
          title: "Savin Hill",
          icon: iconBase
        });
        savinHill_marker.setMap(map);

        var parkStreet_marker = new google.maps.Marker({
          position: parkStreet,
          title: "Park Street",
          icon: iconBase
        });
        parkStreet_marker.setMap(map);

        var broadway_marker = new google.maps.Marker({
          position: broadway,
          title: "Broadway",
          icon: iconBase
        });
        broadway_marker.setMap(map);

        var northQuincy_marker = new google.maps.Marker({
          position: northQuincy,
          title: "North Quincy",
          icon: iconBase
        });
        northQuincy_marker.setMap(map);

        var shawmut_marker = new google.maps.Marker({
          position: shawmut,
          title: "Shawmut",
          icon: iconBase
        });
        shawmut_marker.setMap(map);

        var davis_marker = new google.maps.Marker({
          position: davis,
          title: "Davis",
          icon: iconBase
        });
        davis_marker.setMap(map);

        var alewife_marker = new google.maps.Marker({
          position: alewife,
          title: "Alewife",
          icon: iconBase
        });
        alewife_marker.setMap(map);

        var kendall_mit_marker = new google.maps.Marker({
          position: kendall_mit,
          title: "Kendall/MIT",
          icon: iconBase
        });
        kendall_mit_marker.setMap(map);

        var charles_mgh_marker = new google.maps.Marker({
          position: charles_mgh,
          title: "Charles/MGH",
          icon: iconBase
        });
        charles_mgh_marker.setMap(map);

        var downtownCrossing_marker = new google.maps.Marker({
          position: downtownCrossing,
          title: "Downtown Crossing",
          icon: iconBase
        });
        downtownCrossing_marker.setMap(map);

        var quincyCenter_marker = new google.maps.Marker({
          position: quincyCenter,
          title: "Quincy Center",
          icon: iconBase
        });
        quincyCenter_marker.setMap(map);

        var quincyAdams_marker = new google.maps.Marker({
          position: quincyAdams,
          title: "Quincy Adams",
          icon: iconBase
        });
        quincyAdams_marker.setMap(map);

        var ashmont_marker = new google.maps.Marker({
          position: ashmont,
          title: "Ashmont",
          icon: iconBase
        });
        ashmont_marker.setMap(map);

        var wollaston_marker = new google.maps.Marker({
          position: wollaston,
          title: "Wollaston",
          icon: iconBase
        });
        wollaston_marker.setMap(map);

        var fieldsCorner_marker = new google.maps.Marker({
          position: fieldsCorner,
          title: "Fields Corner",
          icon: iconBase
        });
        fieldsCorner_marker.setMap(map);

        var centralSquare_marker = new google.maps.Marker({
          position: centralSquare,
          title: "Central Square",
          icon: iconBase
        });
        centralSquare_marker.setMap(map);

        var braintree_marker = new google.maps.Marker({
          position: braintree,
          title: "Braintree",
          icon: iconBase
        });
        braintree_marker.setMap(map);

        var redLine1 = [
          alewife,
          davis,
          porterSquare,
          harvardSquare,
          centralSquare,
          kendall_mit,
          charles_mgh,
          parkStreet,
          downtownCrossing,
          southStation,
          broadway,
          andrew,
          jfk_umass
        ];

        var redLine2 = [
          jfk_umass,
          northQuincy,
          wollaston,
          quincyCenter,
          quincyAdams,
          braintree
        ];

        var redLine3 = [
          jfk_umass,
          savinHill,
          fieldsCorner,
          shawmut,
          ashmont
        ];

        var path1 = new google.maps.Polyline({
          path: redLine1,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
        path1.setMap(map);

        var path2 = new google.maps.Polyline({
          path: redLine2,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
        path2.setMap(map);

        var path3 = new google.maps.Polyline({
          path: redLine3,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
        path3.setMap(map);

//find my location

var infoWindow = new google.maps.InfoWindow();

if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {

            var user_pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(user_pos);
            map.panTo(user_pos);

            var user_marker = new google.maps.Marker({
            position: user_pos,
            title: "Your Location"
          });
            user_marker.setMap(map);

            google.maps.event.addListener(user_marker, 'click', function() {
            infoWindow.setContent('Station: closestStation(user_pos), Distance: getDist(user_pos, closestStation(user_pos)) miles');
            infoWindow.open(map, user_marker);

            var stationRoute = [
              user_pos,
              closestStation(user_pos)
            ];

            var pathToStation = new google.maps.Polyline({
            path: stationRoute,
            geodesic: true,
            strokeColor: '#0000FF', //supposed to be blue
            strokeOpacity: 1.0,
            strokeWeight: 2
        });
        pathToStation.setMap(map);
        });

        });
  }

function closestStation(myPos) {

  var shortestDist = 0;
  var shortestIndex = 0;

  var stations = [
    alewife,
    davis,
    porterSquare,
    harvardSquare,
    centralSquare,
    kendall_mit,
    charles_mgh,
    parkStreet,
    downtownCrossing,
    southStation,
    broadway,
    andrew,
    jfk_umass,
    northQuincy,
    wollaston,
    quincyCenter,
    quincyAdams,
    braintree,
    savinHill,
    fieldsCorner,
    shawmut,
    ashmont
  ];
  for (i = 0; i < stations.length; i++) {
    if (getDist(myPos, stations(i)) > shortestDist) {
      shortestIndex = i;
    }
  }
  return stations(shortestIndex);
}

function getDist(pos1, pos2) {
  var R = 6371e3; // meters
    var w = pos1.lat.toRadians();
    var x = pos2.lat.toRadians();
    var y = (pos2.lat-pos1.lat).toRadians();
    var z = (pos2.lng-pos2.lng).toRadians();

    var a = Math.sin(y/2) * Math.sin(y/2) +
            Math.cos(w) * Math.cos(x) *
            Math.sin(z/2) * Math.sin(z/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    return R * c * 0.00062137; //convert to miles
}
}