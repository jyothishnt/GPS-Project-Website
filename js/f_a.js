var map;
var geocoder;
var url = '';
var addr;

function checkUrlExists() {
  url = 'founders_associates.json';
  $.ajax({
    cache: false,
    async: true,
    dataType: "json",
    url: url,
    success: function(res) {
      buildTable('f_a_datatable',res);
      //var map = getMapObj();
      //showFounders(map,res[0]);
      //showAssociates(map,res[1]);
    },
    error: function(jqxhr, errorText) {
      $('.msg').html('Sorry, not availble now. Please try after sometime.');
      return 0;
    }
  });
  return 0;
}

/*function getMapObj() {
  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(9.554772, 7.908414);
  var mapOptions = {
    zoom: 2,
    center: latlng,
  } */
  //map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var legend = document.getElementById('dataTable');
  var div = document.createElement('div');
  //div.innerHTML = '<img src="img/microreact-map-marker2.svg"> Founders<br>';
  //div.innerHTML += '<img src="img/microreact-map-marker-blue.svg"> Associates';
  legend.appendChild(div);

  //map.controls[google.maps.ControlPosition.RIGHT_TOP].push(legend);
  //return map;
//}
function showFounders(map, data) {

  // Work on founders first
  $.each(data, function(i, hash) {
    var city = hash['City'];
    var country = hash['Country'];
    var inst = hash['Institution'];
    var contact = hash['Contact'];
    if(city == "US") {
      // city = "United States of America";
    }
    // Geocoding the address (get the lat and lng positions)
    /*$.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+city+'&sensor=false', null, function (data) {
      if(data.results[0]) {
        var p = data.results[0].geometry.location;
        var latlng = new google.maps.LatLng(p.lat, p.lng);
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            // icon: 'https://maps.google.com/mapfiles/kml/shapes/schools_maps.png'
        });
        // Create icon 
        var icon = new google.maps.MarkerImage(
            "img/gps.ico",
            null, /* size is determined at runtime */
          /*  null, /* origin is 0,0 */
          /*  null, /* anchor is bottom center of the scaled image */
          /*  new google.maps.Size(20,20)
        );
        // set icon to marker
        marker.setIcon(icon);
        var html = "<div style='line-height:1.35;overflow:hidden;white-space:nowrap;font-weight:bold;'>";
        html += "<h3>Founder</h3>";
        html += "<span style='color: #666;'>City: </span><span style='color:brown;'>" + city + "</span><br>";
        html += "<span style='color: #666;'>Institution: </span><span style='color:brown;'>" + inst + "</span><br>";
        html += "<span style='color: #666;'>Contact: </span><span style='color:brown;'>" + contact + "</span><br>";
        html += "</div>";
        var infowindow = new google.maps.InfoWindow(
                  { content: html,
                    size: new google.maps.Size(50,50)
                  });
        google.maps.event.addListener(marker, 'mouseover', function() { infowindow.open(map, marker);});
        google.maps.event.addListener(marker, 'mouseout', function() { infowindow.close(map, marker);});
      }
      else {
        console.log(addr + ' not found')
      }
    }); */
  });
}

function showAssociates(map, data) {

  // Work on founders first
  $.each(data, function(i, hash) {
    var city = hash['City'];
    var country = hash['Country'];
    var inst = hash['Institution'];
    var contact = hash['Contact'];
    if(city == "US") {
      // city = "United States of America";
    }
    // Geocoding the address (get the lat and lng positions)
   /* $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+city+'&sensor=false', null, function (data) {
      if(data.results[0]) {
        var p = data.results[0].geometry.location;
        var latlng = new google.maps.LatLng(p.lat, p.lng);
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            // icon: 'https://maps.google.com/mapfiles/kml/shapes/schools_maps.png'
        });
        // Create icon 
        var icon = new google.maps.MarkerImage(
            // "https://maps.google.com/mapfiles/kml/shapes/sunny.png",
            "img/gps_icon.gif",
            null, /* size is determined at runtime */
          /*  null, /* origin is 0,0 */
          /*  null, /* anchor is bottom center of the scaled image */
          /*  new google.maps.Size(20,20)
        );
        // set icon to marker
        marker.setIcon(icon);
        var html = "<div style='line-height:1.35;overflow:hidden;white-space:nowrap;font-weight:bold;'>";
        html += "<h3>Associate</h3>";
        html += "<span style='color: #666;'>City: </span><span style='color:brown;'>" + city + "</span><br>";
        html += "<span style='color: #666;'>Institution: </span><span style='color:brown;'>" + inst + "</span><br>";
        html += "<span style='color: #666;'>Contact: </span><span style='color:brown;'>" + contact + "</span><br>";
        html += "</div>";
        var infowindow = new google.maps.InfoWindow(
                  { content: html,
                    size: new google.maps.Size(50,50)
                  });
        google.maps.event.addListener(marker, 'mouseover', function() { infowindow.open(map, marker);});
        google.maps.event.addListener(marker, 'mouseout', function() { infowindow.close(map, marker);});
      }
      else {
        console.log(addr + ' not found')
      }
    }); */
  });
}

/*function placeMarker(location, text) {
  var marker = new google.maps.Marker({
      position: location,
      map: map
  });
  if(text != undefined) {
    var infowindow = new google.maps.InfoWindow(
                        { content: text,
                          size: new google.maps.Size(50,50)
                        });
  }
  google.maps.event.addListener(marker, 'click', function() { infowindow.open(map, marker);});
  map.setCenter(location);
} */

/*function showAddressInMap(address) {
  $.each(address, function(i,addr) {
    $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+addr+'&sensor=false', null, function (data) {
      if(data.results[0]) {
        var p = data.results[0].geometry.location;
        var latlng = new google.maps.LatLng(p.lat, p.lng);
        placeMarker(p,addr);
      }
    });
  });
} */

google.maps.event.addDomListener(window, 'load', checkUrlExists);

// Build table content from data hash
function buildTable(ele,dataArr) {
  var div = document.getElementById(ele);
  var table_str = "<table class='table table-striped'><th>Contact</th><th>Institution</th><th>City</th><th>Country</th>"
  // Reading data from a 2D array
  $.each(dataArr, function(i, arr) {
    $.each(arr, function(j, map) {
      table_str += "<tr><td>"+ map['Contact'] +"</td><td>" + map['Institution'] + "</td><td>" + map['City'] + "</td><td>" + map['Country'] + "</td></tr>";
    });
  })
  table_str += "</table>";
  $(div).html(table_str);
}

