var mymap = L.map("partnersMapid", {
  center: [0, 0],
  zoom: 2
});

L.tileLayer(
  "https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2dwcy13Z3NhLWVkZ2UiLCJhIjoiY2owaWE4d2w0MDAwMTMybXk4cTN2eG5xYSJ9.l5ZaIOGl6IY_2i_fWfsRDA",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken:
      "pk.eyJ1IjoiY2dwcy13Z3NhLWVkZ2UiLCJhIjoiY2owaWE4d2w0MDAwMTMybXk4cTN2eG5xYSJ9.l5ZaIOGl6IY_2i_fWfsRDA"
  }
).addTo(mymap);

//L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);

// locations with a microreact tree

var myBlueIcon = L.icon({
  iconUrl: "img/white-dot.svg",
  iconSize: [8, 8],
  iconAnchor: [0, 0],
  popupAnchor: [4, 0],
});

let isClicked = false;

$(document).ready(function() {
  add_partners_to_map();
});

function add_partners_to_map() {
  // Wait for data to be loaded in f_a.js (this is ugly but without a better understanding of the site I don't want to touch anything else)
  if (
    typeof partnersGroupedByCity == "undefined" ||
    partnersGroupedByCity.length == 0
  ) {
    setTimeout(add_partners_to_map, 100);
    return;
  }

  // Add partners to map (grouped by city)
  $.each(partnersGroupedByCity, function(dummy, city) {
    let marker = L.marker([city.latitude, city.longitude], {
      icon: myBlueIcon
    }).addTo(mymap);

    var affiliationsHtml = Object.entries(city.affiliations)
      .map(function(pair) {
        const affiliation = pair[0];
        const people = pair[1];
        return "<b>" + affiliation + "</b><br/>" + people.join(", ");
      })
      .join("<br/><br/>");
    marker
      .bindPopup(
        "<i>" + city.city + ", " + city.country + "</i><br/>" + affiliationsHtml
      )
      .openPopup();

    marker.on({
      mouseover: function() {
        if (!isClicked) {
          this.openPopup();
        }
      },
      click: function() {
        isClicked = true;
        this.openPopup();
      }
    });
  });

  mymap.on({
    click: function() {
      isClicked = false;
    },
    popupclose: function() {
      isClicked = false;
    }
  });
}
