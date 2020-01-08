var mymap = L.map('partnersMapid',
{
    center: [0,0],
    zoom: 2
});

L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2dwcy13Z3NhLWVkZ2UiLCJhIjoiY2owaWE4d2w0MDAwMTMybXk4cTN2eG5xYSJ9.l5ZaIOGl6IY_2i_fWfsRDA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: 'pk.eyJ1IjoiY2dwcy13Z3NhLWVkZ2UiLCJhIjoiY2owaWE4d2w0MDAwMTMybXk4cTN2eG5xYSJ9.l5ZaIOGl6IY_2i_fWfsRDA'
}).addTo(mymap);

//L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);

// locations with a microreact tree

var myIcon = L.icon({
    iconUrl: 'img/microreact-map-marker2.svg',
    shadowUrl: 'https://unpkg.com/leaflet@1.3.1/dist/images/marker-shadow.png',
    iconSize: [25, 40],
    iconAnchor: [15, 36],
    popupAnchor: [-2, -28],
    shadowSize: [50, 30],
    shadowAnchor: [20, 36]
});

var myBlueIcon = L.icon({
    iconUrl: 'img/microreact-map-marker-blue.svg',
    shadowUrl: 'https://unpkg.com/leaflet@1.3.1/dist/images/marker-shadow.png',
    iconSize: [25, 40],
    iconAnchor: [15, 36],
    popupAnchor: [-2, -28],
    shadowSize: [50, 30],
    shadowAnchor: [20, 36]
});

let isClicked = false

$(document).ready ( function () {
    add_partners_to_map() ;
})

function add_partners_to_map() {

    // Wait for data to be loaded in f_a.js (this is ugly but without a better understanding of the site I don't want to touch anything else)
    if ( typeof partners == 'undefined' || partners.length == 0 ) {
        setTimeout ( add_partners_to_map , 100 ) ;
        return ;
    }

    // Add partners to map
    $.each ( partners , function ( dummy , partner ) {
        let marker =  L.marker([partner.latitude, partner.longitude], {icon: myBlueIcon}).addTo(mymap);
        marker.bindPopup("<b>"+partner.affiliation+"</b><br>"+partner.city+", "+partner.country+"<br>"+partner.name).openPopup();

        marker.on({
            mouseover: function() {
                if(!isClicked) {
                    this.openPopup()
                }
            },
            click: function() {
                isClicked = true
                this.openPopup()
            }
        })
    } ) ;

    mymap.on ({
        click: function() {
            isClicked = false
        },
        popupclose: function () {
            isClicked = false
        }
    })
}
