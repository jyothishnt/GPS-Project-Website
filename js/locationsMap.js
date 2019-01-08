var mymap = L.map('mapid',
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
    iconUrl: 'img/microreact-map-marker2.svg',
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

var country;
var markerArgentina =  L.marker([-34.6037, -58.3816], {icon: myIcon}).addTo(mymap);

markerArgentina.on({
      click: function (country) {
      $("#exampleModal").modal("show");
      $("#exampleModalLabel.modal-title").text("Argentina");
      $(".sampleSize").text("Samples: 493 ");
      $(".microreactLink").html($("<a>Explore data in Microreact</a>").attr("href", 'https://microreact.org/project/GPS_Argentina'));
      $.getScript("../js/ArgentinaBars.js");
      country = 'Argentina';  
      console.log("Country in use:" + country);
      return country;
      
    }
  });

  /*Close modal on map click */
  mymap.on('click', function(e) {
    $('#exampleModal').modal('hide');
  });

var markerBangladesh = L.marker([23.8103, 90.4125], {icon: myIcon}).addTo(mymap);

markerBangladesh.on({
    click: function (country) {
        $("#exampleModal").modal("show");
        $("#exampleModalLabel.modal-title").text("Bangladesh");
        $(".sampleSize").text("Samples: 556 ");
        $(".microreactLink").html($("<a>Explore data in Microreact</a>").attr("href", 'https://microreact.org/project/GPS_Bangladesh'));
        $.getScript("../js/ArgentinaBars.js");
        $.getScript("../js/ArgentinaClinicalMBar.js");

    }
});

/*Close modal on map click */
mymap.on('click', function(e) {
    $('#exampleModal').modal('hide');
});

var markerBelarus = L.marker([53.9045, 27.5615], {icon: myIcon}).addTo(mymap);
markerBelarus.bindPopup("<b>Belarus</b><br>Samples: 98<br><a href='https://microreact.org/project/SyeXKdonZ'>Microreact</a>").openPopup();

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

var markerBrazil = L.marker([-14.2350, -51.9253], {icon: myIcon}).addTo(mymap);
//markerBrazil.bindPopup("<b>Brazil</b><br>Samples: 512<br><a href='https://microreact.org/project/GPS_Brazil'>Microreact</a>").openPopup();

markerBrazil.on({
    click: function (country) {
        $("#exampleModal").modal("show");
        $("#exampleModalLabel.modal-title").text("Brazil");
        $(".sampleSize").text("Samples: 412 ");
        $(".microreactLink").html($("<a>Explore data in Microreact</a>").attr("href", 'https://microreact.org/project/GPS_Brazil'));
        $.getScript("../js/ArgentinaBars.js");
        $.getScript("../js/ArgentinaClinicalMBar.js");

    }
})

mymap.on('click', function(e) {
    $('#exampleModal').modal('hide');
});

var markerCambodia = L.marker([11.562108, 104.888535], {icon: myIcon}).addTo(mymap);
markerCambodia.bindPopup("<b>Cambodia</b><br>Samples: 914<br><a href='https://microreact.org/project/GPS_Cambodia'>Microreact</a>").openPopup();

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

var markerEthiopia = L.marker([9.005401, 38.763611], {icon: myIcon}).addTo(mymap);
markerEthiopia.bindPopup("<b>Ethiopia</b><br>Samples: 100<br><a href='https://microreact.org/project/GPS_Ethiopia'>Microreact</a>").openPopup();

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

var markerGambia = L.marker([13.4527, -16.5780], {icon: myIcon}).addTo(mymap);
markerGambia.bindPopup("<b>The Gambia</b><br>Samples: 3069<br><a href='https://microreact.org/project/GPS_The-Gambia'>Microreact</a>").openPopup();

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

var markerHongKong = L.marker([22.3964, 114.1095], {icon: myIcon}).addTo(mymap);
markerHongKong.bindPopup("<b>Hong Kong</b><br>Samples: 444<br><a href='https://microreact.org/project/GPS-HK-HKU'>Microreact</a>").openPopup();
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

var markerIndia = L.marker([20.5937, 78.9629], {icon: myIcon}).addTo(mymap);
markerIndia.bindPopup("<b>India</b><br>Samples: 423<br><a href='https://microreact.org/project/S1Tfqn_AZ'>Microreact</a>").openPopup();
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

var markerIsrael = L.marker([32.0853, 34.7818], {icon: myIcon}).addTo(mymap);
markerIsrael.bindPopup("<b>Israel</b><br>Samples: 1171<br><a href='https://microreact.org/project/GPS_Israel'>Microreact</a>").openPopup();
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

var markerMalawi = L.marker([-13.58, 33.46], {icon: myIcon}).addTo(mymap);
markerMalawi.bindPopup("<b>Malawi</b><br>Samples: 1641<br><a href='https://microreact.org/project/GPS_Malawi'>Microreact</a>").openPopup();
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

var markerMozambique = L.marker([-25.9655, 32.5832], {icon: myIcon}).addTo(mymap);
markerMozambique.bindPopup("<b>Mozambique</b><br>Samples: 365<br><a href='https://microreact.org/project/GPS_Mozambique'>Microreact</a>").openPopup();
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

var markerNepal = L.marker([27.42, 85.19], {icon: myIcon}).addTo(mymap);
markerNepal.bindPopup("<b>Nepal</b><br>Samples: 455<br><a href='https://microreact.org/project/GPS_Nepal'>Microreact</a>").openPopup();
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

var markerNigeria = L.marker([9.0820, 8.6753], {icon: myIcon}).addTo(mymap);
markerNigeria.bindPopup("<b>Nigeria</b><br>Samples: 107<br><a href='https://microreact.org/project/GPS_Nigeria'>Microreact</a>").openPopup();
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

var markerPakistan = L.marker([30.3753, 69.3451], {icon: myIcon}).addTo(mymap);
markerPakistan.bindPopup("<b>Pakistan</b><br>Samples: 100<br><a href='https://microreact.org/project/GPS_Pakistan'>Microreact</a>").openPopup();
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

var markerPapuaNG = L.marker([-9.44314, 147.17972], {icon: myIcon}).addTo(mymap);
markerPapuaNG.bindPopup("<b>Papua New Guinea</b><br>Samples: 185<br><a href='https://microreact.org/project/GPS_Papua_New_Guinea'>Microreact</a>").openPopup();
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

var markerPeru = L.marker([-12.046374, -77.042793], {icon: myIcon}).addTo(mymap);
markerPeru.bindPopup("<b>Peru</b><br>Samples: 1019<br><a href='https://microreact.org/project/GPS_Peru'>Microreact</a>").openPopup();
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

var markerPoland = L.marker([52.237049, 21.017532], {icon: myIcon}).addTo(mymap);
markerPoland.bindPopup("<b>Poland</b><br>Samples: 268<br><a href='https://microreact.org/project/GPS_Poland'>Microreact</a>").openPopup();
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

var markerQatar = L.marker([25.3548, 51.1839], {icon: myIcon}).addTo(mymap);
markerQatar.bindPopup("<b>Qatar</b><br>Samples: 114<br><a href='https://microreact.org/project/GPS_Qatar'>Microreact</a>").openPopup();
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

var markerSouthAfrica = L.marker([-33.918861, 18.423300], {icon: myIcon}).addTo(mymap);
markerSouthAfrica.bindPopup("<b>South Africa</b><br>Samples: 4865<br><a href='https://microreact.org/project/GPS_South-Africa'>Microreact</a>").openPopup();
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

var markerThailand = L.marker([13.736717, 100.523186], {icon: myIcon}).addTo(mymap);
markerThailand.bindPopup("<b>Thailand</b><br>Samples: 247<br><a href='https://microreact.org/project/GPS_Thailand'>Microreact</a>").openPopup();
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

var markerTogo = L.marker([6.136629, 1.222186], {icon: myIcon}).addTo(mymap);
markerTogo.bindPopup("<b>Togo</b><br>Samples: 120<br><a href='https://microreact.org/project/GPS_Togo'>Microreact</a>").openPopup();
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
markerUSA.bindPopup("<b>USA</b><br>Samples: 1887<br><a href='https://microreact.org/project/GPS_United-States'>Microreact</a>").openPopup();
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
var markerCanada = L.marker([45.41117, -75.69812], {icon: myBlueIcon}).addTo(mymap);
markerCanada.bindPopup("<b>Canada</b><br>Samples: 18<br>").openPopup();
markerCanada.on({
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

var markerGuatemala = L.marker([14.628434, -90.522713], {icon: myBlueIcon}).addTo(mymap);
markerGuatemala.bindPopup("<b>Guetemala</b><br>Samples: 1<br>").openPopup();
markerGuatemala.on({
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

var markerFrance = L.marker([48.8566, 2.3522], {icon: myBlueIcon}).addTo(mymap);
markerFrance.bindPopup("<b>France</b><br>Samples: 15<br>").openPopup();
markerFrance.on({
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

var markerTrinidad = L.marker([10.671067, -61.521206], {icon: myBlueIcon}).addTo(mymap);
markerTrinidad.bindPopup("<b>Trinidad and Tobago</b><br>Samples: 98<br>").openPopup();
markerTrinidad.on({
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

var markerEcuador = L.marker([-0.180653, -78.467834], {icon: myBlueIcon}).addTo(mymap);
markerEcuador.bindPopup("<b>Ecuador</b><br>Samples: 1<br>").openPopup();
markerEcuador.on({
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

var markerSweden = L.marker([59.334591, 18.063240], {icon: myBlueIcon}).addTo(mymap);
markerSweden.bindPopup("<b>Sweden</b><br>Samples: 1<br>").openPopup();
markerSweden.on({
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

var markerLatvia = L.marker([56.946285, 24.105078], {icon: myBlueIcon}).addTo(mymap);
markerLatvia.bindPopup("<b>Latvia</b><br>Samples: 10<br>").openPopup();
markerLatvia.on({
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

var markerLithuania = L.marker([54.687157, 25.279652], {icon: myBlueIcon}).addTo(mymap);
markerLithuania.bindPopup("<b>Lithuania</b><br>Samples: 11<br>").openPopup();
markerLithuania.on({
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

var markerNetherlands = L.marker([52.370216, 4.895168], {icon: myBlueIcon}).addTo(mymap);
markerNetherlands.bindPopup("<b>Netherlands</b><br>Samples: 30<br>").openPopup();
markerNetherlands.on({
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

var markerHungary = L.marker([47.497913, 19.040236], {icon: myBlueIcon}).addTo(mymap);
markerHungary.bindPopup("<b>Hungary</b><br>Samples: 17<br>").openPopup();
markerHungary.on({
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

var markerBulgaria = L.marker([42.698334, 23.319941], {icon: myBlueIcon}).addTo(mymap);
markerBulgaria.bindPopup("<b>Bulgaria</b><br>Samples: 16<br>").openPopup();
markerBulgaria.on({
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

var markerOman = L.marker([23.614328, 58.545284], {icon: myBlueIcon}).addTo(mymap);
markerOman.bindPopup("<b>Oman</b><br>Samples: 1<br>").openPopup();
markerOman.on({
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

var markerKuwait = L.marker([29.378586, 47.990341], {icon: myBlueIcon}).addTo(mymap);
markerKuwait.bindPopup("<b>Kuwait</b><br>Samples: 1<br>").openPopup();
markerKuwait.on({
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

var markerEgypt = L.marker([25.215137, 29.979530], {icon: myBlueIcon}).addTo(mymap);
markerEgypt.bindPopup("<b>Egypt</b><br>Samples: 34<br>").openPopup();
markerEgypt.on({
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


