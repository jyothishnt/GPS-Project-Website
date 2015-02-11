var map;
var geocoder;
var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
geocoder = new google.maps.Geocoder();
var latlng = new google.maps.LatLng(9.554772, 7.908414);
var mapOptions = {
  zoom: 2,
  center: latlng,
  scrollwheel: false
}
map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
var url = '/dataviewer/json/meta/gmd_country';
var total_entries = 0;
function checkUrlExists() {
    $.ajax({
      cache: false,
      async: true,
      dataType: "json",
      url: url,
      timeout: 1500, // timeout to get data from database/dataviewer
      success: function(res) {
        geocode(res);
        buildTable('sam_datatable',res);
        console.log('Loaded from database');
        return 1;
      },
      error: function(jqxhr, errorText) {
        url = 'metadata_countries.json';
        $.ajax({
          cache: false,
          async: true,
          dataType: "json",
          url: url,
          success: function(res) {
            geocode(res);
            buildTable('sam_datatable',res);
            console.log('Loaded from file');
          },
          error: function(jqxhr, errorText) {
            $('.msg').html('Sorry, could not connect to the database. Please try after sometime.');
            return 0;
          }
        });
        return 0;
      }
    });
}

function geocode(address) {
  $.each(address, function(i, hash) {
    var country, count;
    for (key in hash) {
      country = key;
      count = hash[key]['sample_count'];
      lat = hash[key]['lat'];
      lng = hash[key]['lng'];
    }

    if(lat && lng) {
      var latlng = new google.maps.LatLng(lat, lng);
      // console.log(latlng)
      var marker = new google.maps.Marker({
          position: latlng,
          map: map,
          // icon: 'https://maps.google.com/mapfiles/kml/shapes/schools_maps.png'
      });
      // Create icon 
      var icon = new google.maps.MarkerImage(
          "img/gps_icon.gif",
          null, /* size is determined at runtime */
          null, /* origin is 0,0 */
          null, /* anchor is bottom center of the scaled image */
          new google.maps.Size(20,20)
      );
      // set icon to marker
      marker.setIcon(icon);
      var html = "<div style='width: 120px; text-align: left; color: grey;'><b>"+ country + " : <span style='color:brown;'>" + count + "</span></b></div>";
      var html = "<div style='line-height:1.35;overflow:hidden;white-space:nowrap;font-weight:bold;'>";
      html += "<span style='color: #666;'>Location: </span><span style='color:brown;'>" + country + "</span><br>";
      html += "<span style='color: #666;'>Samples: </span><span style='color:brown;'>" + count + "</span><br>";
      html += "</div>";

      var infowindow = new google.maps.InfoWindow(
                { content: html,
                  size: new google.maps.Size(50,50)
                });

      google.maps.event.addListener(marker, 'mouseover', function() { infowindow.open(map, marker);});
      google.maps.event.addListener(marker, 'mouseout', function() { infowindow.close(map, marker);});
    }
  });

}


google.maps.event.addDomListener(window, 'load', checkUrlExists);

// Build table content from data hash
function buildTable(ele,data) {
  var div = document.getElementById(ele);
  var table_str = "<table class='table table-striped'><th>Country</th><th>No. of Samples</th>"
  $.each(data, function(i, map) {
    table_str += "<tr>";
    for (key in map) {
      table_str += "<td>"+ key +"</td><td>" + map[key] + "</td>";
    }
    table_str += "</tr>";
  })
  table_str += "</table>";
  $(div).html(table_str);
}
