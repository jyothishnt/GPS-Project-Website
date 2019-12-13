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

var markerHinxton =  L.marker([56.490669, -4.202646], {icon: myBlueIcon}).addTo(mymap);
markerHinxton.bindPopup("<b>Welcome Sanger Institute</b><br>Cambridge, UK<br>Stephen Bentley").openPopup();

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

var markerHinxton =  L.marker([52.0785, 0.1861], {icon: myBlueIcon}).addTo(mymap);
markerHinxton.bindPopup("<b>Welcome Sanger Institute</b><br>Cambridge, UK<br>Stephen Bentley").openPopup();

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

var markerDarwinAUS = L.marker([-12.4634, 130.8456], {icon: myBlueIcon}).addTo(mymap);
markerDarwinAUS.bindPopup("<b>Menzies School of Health Research</b><br>Darwin, Australia<br>Prof. Amanda Leach").openPopup();

markerDarwinAUS.on({
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

var markerCasuarinaAUS = L.marker([-28.2887, 153.5739], {icon: myBlueIcon}).addTo(mymap);
markerCasuarinaAUS.bindPopup("<b>Centre for Disease Control, Department of Health</b><br>Casuarina, Australia<br>Heather Cook").openPopup();

markerCasuarinaAUS.on({
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

var markerSuwonSK = L.marker([37.2636, 127.0286], {icon: myBlueIcon}).addTo(mymap);
markerSuwonSK.bindPopup("<b>Sungkyunkwan University of Medicine</b><br>Suwon, South Korea<br>Prof. Kwan Soo Ko<br>").openPopup();

markerSuwonSK.on({
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
markerArgentina.bindPopup("<b>Instituto Nacional de Enfermedades Infecciosas</b><br>Buenos Aries, Argentina<br>Alejandra Corso").openPopup();

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
markerBangladesh.bindPopup("<b>Child Health Research Foundation, International Centre for Diarrhoeal Disease Research</b><br>Dhaka, Bangladesh<br>Samir Saha, Abdullah Brooks").openPopup();

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
markerBelarus.bindPopup("<b>Centre for Disease Control, Department of Health</b><br>Casuarina, Australia<br>Heather Cook").openPopup();

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
markerBrazil.bindPopup("<b>Adolfo Lutz Institute</b><br>Sao Paolo, Brazil<br>Maria Cristina Brandileone").openPopup();

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
markerCambodia.bindPopup("<b>Cambodia-Oxford Medical Research Unit</b><br>Siem Reap & Maesot, Cambodia<br>Dr. Paul Turner").openPopup();

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
markerEthiopia.bindPopup("<b>University of California</b><br>Amhara, Ethiopia<br>Jeremy Keenan, Tom Lietman").openPopup();

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

var markerGambia = L.marker([13.4794, -16.6704], {icon: myBlueIcon}).addTo(mymap);
markerGambia.bindPopup("<b>MRC</b><br>Bakau, The Gambia<br>Martin Antonio").openPopup();

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
markerHongKong.bindPopup("<b>University of Hong Kong</b><br>Pok Fu Lam, Hong Kong<br>PL Ho").openPopup();
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
markerIndia.bindPopup("<b>Christian Medical College</b><br>Vellore, India<br>Balaji Veeraraghavan").openPopup();
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
markerIsrael.bindPopup("<b>Ben-Gurion University</b><br>Beersheva, Israel<br>Prof. Ron Dagan").openPopup();
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
markerMalawi.bindPopup("<b>MLW</b><br>Blantyre, Malawi<br>Dean Everett").openPopup();
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
markerMozambique.bindPopup("<b>Manhica Health Research Centre; Centro de Investigacao em Saude de Manhica</b><br>Manhica, Mozambique<br>Betuel Sigauque").openPopup();
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
markerNepal.bindPopup("<b>University of Oxford</b><br>Kathmandu, Nepal<br>Andrew Pollard").openPopup();
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
markerNigeria.bindPopup("<b>University of Nebraska Medical Center and Ahmadu Bello University Zaria</b><br>Abuja, Nigeria<br>Stephen Obaro").openPopup();
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
markerPakistan.bindPopup("<b>Aga Khan University</b><br>Karachi, Pakistan<br>Sadia Shakour").openPopup();
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
markerPapuaNG.bindPopup("<b>Telethon Kids Institute</b><br>Papua New Guinea<br>Deborah Lehmann").openPopup();
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
markerPeru.bindPopup("<b>Universidad Peruana Cayetano Heredia</b><br>Lima, Peru<br>Theresa Ochoa").openPopup();
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
markerPoland.bindPopup("<b>National Medicines Institute</b><br>Warsaw, Poland<br>Prof. Waleria Hryniewicz, Dr. Ewa Sadowy, Dr. Anna Skoczynska").openPopup();
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
markerQatar.bindPopup("<b>Hamad Medical Corporation</b><br>Qatar<br>Sanjay Doiphode").openPopup();
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
markerSouthAfrica.bindPopup("<b>National Institute for Communicable Disease</b><br>Johannesburg, South Africa<br>Anne Von Gottberg, Mignon du Plessis<br>Linda De Gouveia, Kedibone M. Ndlangisa<br>Mushal Ali, Nicole Wolter").openPopup();
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
markerThailand.bindPopup("<b>University of Southampton</b><br>Bangkok, Thailand<br>Dr. Stuart Clarke").openPopup();
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
markerTogo.bindPopup("<b>Agence de Medecine Preventive</b><br>Lome, Togo<br>Jennifer Moisi").openPopup();
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

var markerUSA = L.marker([33.7490, -84.3880], {icon: myBlueIcon}).addTo(mymap);
markerUSA.bindPopup("<b>Emory & CDC</b><br>Atlanta, USA<br>Robert Breiman, Lesley McGee").openPopup();
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
markerSlovenia.bindPopup("<b>The National Laboratory of Health, Environment and Food</b><br>Celije, Slovenia<br>Tamara Kastrin").openPopup();
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
markerNewZealand.bindPopup("<b>University of Auckland, Institute of Environmental Research</b><br>Aukland, New Zealand<br>Emma Best, Phil Cater").openPopup();
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
markerIndonesia.bindPopup("<b>Faculty of Medicine, Diponegoro University</b><br>Semarang, Indonesia<br>Helmia Farida").openPopup();
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
markerMalaysia.bindPopup("<b>University of Southampton</b><br>Kuala Lumpur, Malaysia<br>Dr. Stuart Clarke").openPopup();
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

var markerRussia = L.marker([55.921230, 57.918556], {icon: myBlueIcon}).addTo(mymap);
markerRussia.bindPopup("<b>Moscow Research Institute for Epidemiology</b><br>Moscow, Russia<br>Ekaterina Egorova, Elena Voropaeva").openPopup();
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
markerTurkey.bindPopup("<b>Hacettepe University</b><br>Ankara, Turkey<br>Prof. Eser Ozgen").openPopup();
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

var markerMorocco = L.marker([34.01325, -6.83255], {icon: myBlueIcon}).addTo(mymap);
markerMorocco.bindPopup("<b>Faculty of Medicine and Pharmacy</b><br>Casablanca, Morocco<br>Prof. Naima Elmdaghri").openPopup();
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

var markerGhana = L.marker([5.5560, -2.1969], {icon: myBlueIcon}).addTo(mymap);
markerGhana.bindPopup("<b>University of Ghana Medical School</b><br>Accra, Ghana<br>Eric Sampane-Donker").openPopup();
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
