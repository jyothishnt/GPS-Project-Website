var mymap = L.map('partnersMapid',
{
    center: [0,0],
    zoom: 2
});

/*L.tileLayer('https://api.tiles.mapbox.com/v1/mapbox/light-v9/tiles/2/2/1?access_token={pk.eyJ1IjoiY2dwcy13Z3NhLWVkZ2UiLCJhIjoiY2owaWE4d2w0MDAwMTMybXk4cTN2eG5xYSJ9.l5ZaIOGl6IY_2i_fWfsRDA}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: 'pk.eyJ1IjoiY2dwcy13Z3NhLWVkZ2UiLCJhIjoiY2owaWE4d2w0MDAwMTMybXk4cTN2eG5xYSJ9.l5ZaIOGl6IY_2i_fWfsRDA'
}).addTo(mymap);*/

L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);

// locations with a microreact tree

var myIcon = L.icon({
    iconUrl: 'microreact-map-marker2.svg',
    shadowUrl: 'https://unpkg.com/leaflet@1.3.1/dist/images/marker-shadow.png',
    iconSize: [25, 40],
    iconAnchor: [15, 36],
    popupAnchor: [-2, -28],
    shadowSize: [50, 30],
    shadowAnchor: [20, 36]
});

var myBlueIcon = L.icon({
    iconUrl: 'microreact-map-marker-blue.svg',
    shadowUrl: 'https://unpkg.com/leaflet@1.3.1/dist/images/marker-shadow.png',
    iconSize: [25, 40],
    iconAnchor: [15, 36],
    popupAnchor: [-2, -28],
    shadowSize: [50, 30],
    shadowAnchor: [20, 36]
});

var markerHinxton =  L.marker([52.0785, 0.1861], {icon: myIcon}).addTo(mymap);
markerHinxton.bindPopup("<b>Welcome Trust Sanger Institute</b>").openPopup();

let isClicked = false

markerHinxton.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerArgentina =  L.marker([-34.6037, -58.3816], {icon: myBlueIcon}).addTo(mymap);
markerArgentina.bindPopup("<b>Argentina</b><br>Samples: 493<br>").openPopup();

markerArgentina.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerBangladesh = L.marker([23.8103, 90.4125], {icon: myBlueIcon}).addTo(mymap);
markerBangladesh.bindPopup("<b>Bangladesh</b><br>Samples: 556<br>").openPopup();

markerBangladesh.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerBelarus = L.marker([53.9045, 27.5615], {icon: myBlueIcon}).addTo(mymap);
markerBelarus.bindPopup("<b>Belarus</b><br>Samples: 98<br>").openPopup();

markerBelarus.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerBrazil = L.marker([-14.2350, -51.9253], {icon: myBlueIcon}).addTo(mymap);
markerBrazil.bindPopup("<b>Brazil</b><br>Samples: 512<br>").openPopup();

markerBrazil.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerCambodia = L.marker([11.562108, 104.888535], {icon: myBlueIcon}).addTo(mymap);
markerCambodia.bindPopup("<b>Cambodia</b><br>Samples: 914<br>").openPopup();

markerCambodia.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerEthiopia = L.marker([9.005401, 38.763611], {icon: myBlueIcon}).addTo(mymap);
markerEthiopia.bindPopup("<b>Ethiopia</b><br>Samples: 100<br>").openPopup();

markerEthiopia.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerGambia = L.marker([13.4527, -16.5780], {icon: myBlueIcon}).addTo(mymap);
markerGambia.bindPopup("<b>The Gambia</b><br>Samples: 3069<br>").openPopup();

markerGambia.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerHongKong = L.marker([22.3964, 114.1095], {icon: myBlueIcon}).addTo(mymap);
markerHongKong.bindPopup("<b>Hong Kong</b><br>Samples: 444<br>").openPopup();
markerHongKong.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerIndia = L.marker([20.5937, 78.9629], {icon: myBlueIcon}).addTo(mymap);
markerIndia.bindPopup("<b>India</b><br>Samples: 423<br>").openPopup();
markerIndia.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerIsrael = L.marker([32.0853, 34.7818], {icon: myBlueIcon}).addTo(mymap);
markerIsrael.bindPopup("<b>Israel</b><br>Samples: 1171<br>").openPopup();
markerIsrael.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerMalawi = L.marker([-13.58, 33.46], {icon: myBlueIcon}).addTo(mymap);
markerMalawi.bindPopup("<b>Malawi</b><br>Samples: 1641<br>").openPopup();
markerMalawi.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerMozambique = L.marker([-25.9655, 32.5832], {icon: myBlueIcon}).addTo(mymap);
markerMozambique.bindPopup("<b>Mozambique</b><br>Samples: 365<br>").openPopup();
markerMozambique.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerNepal = L.marker([27.42, 85.19], {icon: myBlueIcon}).addTo(mymap);
markerNepal.bindPopup("<b>Nepal</b><br>Samples: 455<br>").openPopup();
markerNepal.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerNigeria = L.marker([9.0820, 8.6753], {icon: myBlueIcon}).addTo(mymap);
markerNigeria.bindPopup("<b>Nigeria</b><br>Samples: 107<br>").openPopup();
markerNigeria.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerPakistan = L.marker([30.3753, 69.3451], {icon: myBlueIcon}).addTo(mymap);
markerPakistan.bindPopup("<b>Pakistan</b><br>Samples: 100<br>").openPopup();
markerPakistan.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerPapuaNG = L.marker([-9.44314, 147.17972], {icon: myBlueIcon}).addTo(mymap);
markerPapuaNG.bindPopup("<b>Papua New Guinea</b><br>Samples: 185<br>").openPopup();
markerPapuaNG.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerPeru = L.marker([-12.046374, -77.042793], {icon: myBlueIcon}).addTo(mymap);
markerPeru.bindPopup("<b>Peru</b><br>Samples: 1019<br>").openPopup();
markerPeru.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerPoland = L.marker([52.237049, 21.017532], {icon: myBlueIcon}).addTo(mymap);
markerPoland.bindPopup("<b>Poland</b><br>Samples: 268<br>").openPopup();
markerPoland.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerQatar = L.marker([25.3548, 51.1839], {icon: myBlueIcon}).addTo(mymap);
markerQatar.bindPopup("<b>Qatar</b><br>Samples: 114<br>").openPopup();
markerQatar.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerSouthAfrica = L.marker([-33.918861, 18.423300], {icon: myBlueIcon}).addTo(mymap);
markerSouthAfrica.bindPopup("<b>South Africa</b><br>Samples: 4865<br>").openPopup();
markerSouthAfrica.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerThailand = L.marker([13.736717, 100.523186], {icon: myBlueIcon}).addTo(mymap);
markerThailand.bindPopup("<b>Thailand</b><br>Samples: 247<br>").openPopup();
markerThailand.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerTogo = L.marker([6.136629, 1.222186], {icon: myBlueIcon}).addTo(mymap);
markerTogo.bindPopup("<b>Togo</b><br>Samples: 120<br>").openPopup();
markerTogo.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerUSA = L.marker([38.889931, -87.009003], {icon: myIcon}).addTo(mymap);
markerUSA.bindPopup("<b>USA</b><br>Samples: 1887<br>").openPopup();
markerUSA.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

// locations with smaller samples without a microreact tree

var markerSlovenia = L.marker([46.056946, 14.505751], {icon: myBlueIcon}).addTo(mymap);
markerSlovenia.bindPopup("<b>Slovenia</b><br>Samples: 96<br>").openPopup();
markerSlovenia.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerNewZealand = L.marker([-36.484461, 174.763336], {icon: myBlueIcon}).addTo(mymap);
markerNewZealand.bindPopup("<b>New Zealand</b><br>Samples: 87<br>").openPopup();
markerNewZealand.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerIndonesia = L.marker([-6.21462, 106.84513], {icon: myBlueIcon}).addTo(mymap);
markerIndonesia.bindPopup("<b>Indonesia</b><br>Samples: 5<br>").openPopup();
markerIndonesia.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerMalaysia = L.marker([3.1412, 101.68653], {icon: myBlueIcon}).addTo(mymap);
markerMalaysia.bindPopup("<b>Malaysia</b><br>Samples: 36<br>").openPopup();
markerMalaysia.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerChina = L.marker([39.9042, 116.4074], {icon: myBlueIcon}).addTo(mymap);
markerChina.bindPopup("<b>China</b><br>Samples: 548<br>").openPopup();
markerChina.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerMongolia = L.marker([47.921230, 106.918556], {icon: myBlueIcon}).addTo(mymap);
markerMongolia.bindPopup("<b>Mongolia</b><br>Samples: 15<br>").openPopup();
markerMongolia.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerRussia = L.marker([55.921230, 57.918556], {icon: myBlueIcon}).addTo(mymap);
markerRussia.bindPopup("<b>Russia</b><br>Samples: 87<br>").openPopup();
markerRussia.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerTurkey = L.marker([41.015137, 28.979530], {icon: myBlueIcon}).addTo(mymap);
markerTurkey.bindPopup("<b>Turkey</b><br>Samples: 80<br>").openPopup();
markerTurkey.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerKenya = L.marker([-1.2833, 36.8167], {icon: myBlueIcon}).addTo(mymap);
markerKenya.bindPopup("<b>Kenya</b><br>Samples: 1<br>").openPopup();
markerKenya.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerBotswana = L.marker([-24.653257, 25.906792], {icon: myBlueIcon}).addTo(mymap);
markerBotswana.bindPopup("<b>Botswana</b><br>Samples: 8<br>").openPopup();
markerBotswana.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerCentralAfRep = L.marker([6.6111112, 20.9394436], {icon: myBlueIcon}).addTo(mymap);
markerCentralAfRep.bindPopup("<b>Central African Republic</b><br>Samples: 4<br>").openPopup();
markerCentralAfRep.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerMorocco = L.marker([34.01325, -6.83255], {icon: myBlueIcon}).addTo(mymap);
markerMorocco.bindPopup("<b>Morocco</b><br>Samples: 47<br>").openPopup();
markerMorocco.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerNiger = L.marker([13.5137, 2.1098], {icon: myBlueIcon}).addTo(mymap);
markerNiger.bindPopup("<b>Niger</b><br>Samples: 19<br>").openPopup();
markerNiger.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerIvoryCoast = L.marker([5.345317, -6.524429], {icon: myBlueIcon}).addTo(mymap);
markerIvoryCoast.bindPopup("<b>Ivory Coast</b><br>Samples: 2<br>").openPopup();
markerIvoryCoast.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerGhana = L.marker([5.5560, -2.1969], {icon: myBlueIcon}).addTo(mymap);
markerGhana.bindPopup("<b>Ghana</b><br>Samples: 43<br>").openPopup();
markerGhana.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerBenin = L.marker([9.3217, 2.3100], {icon: myBlueIcon}).addTo(mymap);
markerBenin.bindPopup("<b>Benin</b><br>Samples: 5<br>").openPopup();
markerBenin.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerSenegal = L.marker([14.6937, -17.44406], {icon: myBlueIcon}).addTo(mymap);
markerSenegal.bindPopup("<b>Senegal</b><br>Samples: 40<br>").openPopup();
markerSenegal.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerCameroon = L.marker([7.3696, 12.3446], {icon: myBlueIcon}).addTo(mymap);
markerCameroon.bindPopup("<b>Cameroon</b><br>Samples: 29<br>").openPopup();
markerCameroon.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})

var markerDRCongo = L.marker([-4.322447, 15.307045], {icon: myBlueIcon}).addTo(mymap);
markerDRCongo.bindPopup("<b>Democratic Republic of the Congo</b><br>Samples: 1<br>").openPopup();
markerDRCongo.on({
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

mymap.on ({
    click: function() {
        isClicked = false
    },
    popupclose: function () {
        isClicked = false
    }
})


