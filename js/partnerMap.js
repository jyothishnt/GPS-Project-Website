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

var markerArg =  L.marker([-38.416096, -63.616673], {icon: myBlueIcon}).addTo(mymap);
mmarkerArg.bindPopup("<b>Administración Nacional de Laboratorios e Institutos de Salud</b><br>Buenos Aires, Argentina<br>Alejandra Corso, Diego Faccone, Paula Gagetti").openPopup();

let isClicked = false

markerArg.on({
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


var markerDkBD =  L.marker([23.684994, 90.356331], {icon: myBlueIcon}).addTo(mymap);
markerDkBD.bindPopup("<b>International Centre for Diarrheal Diseases Research and Child Health Research Foundation</b><br>Dhaka, Bangladesh<br>Abdullah W Brooks, Md Hasanuzzaman, Roly Malaker, Samir K. Saha").openPopup();

let isClicked = false

markerDkB.on({
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

var markerMinskBLR = L.marker([53.709808, 27.953388], {icon: myBlueIcon}).addTo(mymap);
markerMinskBLR.bindPopup("<b>The Republican Research and Practical Center for Epidemiology and Microbiology</b><br>Minsk, Belarus<br>Alexander Davydov, Leonid Titov").openPopup();

markerMinskBLR.on({
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

var markerSpBR = L.marker([-14.235004, -51.925282], {icon: myBlueIcon}).addTo(mymap);
markerSpBR.bindPopup("<b>Center of Bacteriology, Adolfo Lutz Institute</b><br>São Paulo, Brazil<br>Maria Cristina de Cunto Brandileone, Samanta Cristine Grassi Almeida").openPopup();

markerSpBR.on({
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


var markerSrCM = L.marker([12.565679, 104.990967], {icon: myBlueIcon}).addTo(mymap);
markerSrCM.bindPopup("<b>Cambodia-Oxford Medical Research Unit</b><br>Siem Reap, Cambodia<br>Paul Turner").openPopup();

markerSrCM.on({
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

var markerHkCN = L.marker([35.86166, 104.195396], {icon: myBlueIcon}).addTo(mymap);
markerHkCN.bindPopup("<b>Chinese University of Hong Kong and University of Hong Kong</b><br>Hong Kong, China<br>Margaret Ip, Pak Leung Ho, Pierra Law").openPopup();

markerHkCN.on({
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

var markerBogCO = L.marker([4.570868, -74.297333], {icon: myBlueIcon}).addTo(mymap);
markerBogCO.bindPopup("<b>Universidad De La Sabana</b><br>Bogota, Colombia<br>Luis Felipe Reyes Velasco").openPopup();

markerBogCO.on({
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


var markerAmharaET = L.marker([9.145, 40.489674], {icon: myBlueIcon}).addTo(mymap);
markerAmharaET.bindPopup("<b>University of California</b><br>Amhara, Ethiopia<br>Jeremy Keenan").openPopup();

markerAmharaET.on({
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


var markerAccraGH = L.marker([7.946527, -1.023194], {icon: myBlueIcon}).addTo(mymap);
markerAccraGH.bindPopup("<b>School of Biomedical and Allied Health Sciences, University of Ghana</b><br>Accra, Ghana<br>Eric Sampane-Donkor").openPopup();

markerAccraGH.on({
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


var markerIN = L.marker([20.593683, 78.962883], {icon: myBlueIcon}).addTo(mymap);
markerIN.bindPopup("<b>Christian Medical College, Vallore and Kempegowda Institute of Medical Sciences Hospital & Research Center, Bangalore</b><br>Vallore and Bangalore, India<br>Balaji Veeraraghavan, Geetha Nagaraj, KL Ravikumar").openPopup();

markerIN.on({
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

var markerIS = L.marker([31.046051, 34.851612], {icon: myBlueIcon}).addTo(mymap);
markerIS.bindPopup("<b>Ben-Gurion University of the Negev</b><br>Beersheva, Israel<br>Noga Givon-Lavi, Nurit Porat, Rachel Benisty, Ron Dagan").openPopup();

markerIS.on({
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

var markerKY = L.marker([-0.023559, 37.906193], {icon: myBlueIcon}).addTo(mymap);
markerKY.bindPopup("<b>Kenya Medical Research Institute and Kenya Medical Research Institute</b><br>Nairobi and Kilifi, Kenya<br>Godfrey Bigogo, Anthony Scott").openPopup();

markerKY.on({
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

var markerML = L.marker([-13.254308, 34.301525], {icon: myBlueIcon}).addTo(mymap);
markerML.bindPopup("<b>Malawi-Liverpool-Wellcome-Trust</b><br>Blantyre, Malawi<br>Anmol Kiran, Dean Everett, Jennifer Cornick, Maaike Alaerts").openPopup();

markerML.on({
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


var markerMalaysia = L.marker([4.210484, 101.975769], {icon: myBlueIcon}).addTo(mymap);
markerMalaysia.bindPopup("<b>MAHSA University and University of Southampton, UK</b><br>Selangor and Kuala Lumpur, Malaysia<br>Shamala Devi Sekaran (Sekaran SD) and Stuart Clarke").openPopup();

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

var markerMo = L.marker([31.791702, -7.09262], {icon: myBlueIcon}).addTo(mymap);
markerMo.bindPopup("<b>Ibn Rochd university-hospital center, Mohammed VI University of Health Sciences (UM6SS), Faculté de médecine et de pharmacie de Casablanca</b><br>Casablanca, Morocco<br>Houria Belabbès, Idrissa Diawara, Khalid Zerouali, Naima Elmdaghri").openPopup();

markerMo.on({
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


var markerMoz = L.marker([-18.665695, 35.529564], {icon: myBlueIcon}).addTo(mymap);
markerMoz.bindPopup("<b>Centro de Investigação em Saúde da Manhiça</b><br>Manhica, Mozambique<br>Benild Moiane, Betuel Sigauque, Helio Mucavele").openPopup();

markerMoz.on({
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

var markerNepal = L.marker([28.394857, 84.124008], {icon: myBlueIcon}).addTo(mymap);
markerNepal.bindPopup("<b>University of Oxford and the NIHR Oxford Biomedical Research Centre</b><br>Kathmandu, Nepal<br>Andrew Pollard, Rama Kandasamy").openPopup();

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

var markerNZ = L.marker([-40.900558, 174.885971], {icon: myBlueIcon}).addTo(mymap);
markerNZ.bindPopup("<b>Kenepuru Science Centre</b><br>Auckland, New Zealand<br>Philip Carter").openPopup();

markerNZ.on({
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

var markerNG = L.marker([9.081999, 8.675277], {icon: myBlueIcon}).addTo(mymap);
markerNG.bindPopup("<b>Department of Biological Sciences, Redeemers’ University, Pharmaceutical Microbiology, University of Ibadan, University of Nebraska Medical Center</b><br>Ede, Ibadan and Abuja, Nigeria<br>Christian Happi, Iruka Okeke, Stephen Obaro").openPopup();

markerNG.on({
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


var markerPK = L.marker([30.37532, 69.345116], {icon: myBlueIcon}).addTo(mymap);
markerPK.bindPopup("<b>Aga Khan University and Lahore University of Management and Sciences, </b><br>Karachi and Lahore, Pakistan<br>Imran Nisar, Sadia Shakoor, Shaper Misra").openPopup();

markerPK.on({
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

var markerPNG = L.marker([-6.314993, 143.955551], {icon: myBlueIcon}).addTo(mymap);
markerPNG.bindPopup("<b>The University of Western Australia, Papua New Guinea Institute of Medical Research</b><br>Goroka, Papua New Guinea<br>Deborah Lehmann, Rebecca Ford").openPopup();

markerPNG.on({
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

var markerPeru = L.marker([-9.189967, -75.015152], {icon: myBlueIcon}).addTo(mymap);
markerPeru.bindPopup("<b>Instituto de Medicina Tropical, Universidad Peruana Cayetano Heredia</b><br>Lima, Peru<br>Theresa Ochoa").openPopup();

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

var markerPoland = L.marker([51.919437, 19.145136], {icon: myBlueIcon}).addTo(mymap);
markerPoland.bindPopup("<b>National Medicines Institute</b><br>Warsaw, Poland<br>Anna Skoczynska, Ewa Sadowy, Waleria Hryniewicz").openPopup();

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

var markerQatar = L.marker([25.354826, 51.183884], {icon: myBlueIcon}).addTo(mymap);
markerQatar.bindPopup("<b>Hamad Medical Corporation</b><br>Doha, Qatar<br>Sanjay Doiphode").openPopup();

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

var markerRussia = L.marker([61.52401, 105.318756], {icon: myBlueIcon}).addTo(mymap);
markerRussia.bindPopup("<b>Moscow Research Institute for Epidemiology and Microbiology and Gabrichevsky Epidemiology and Microbiology Research Institute</b><br>Moscow, Russia<br>Ekaterina Egorova, Elena Voropaeva, Yulia Urban").openPopup();

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

var markerSG = L.marker([1.352083, 103.819839], {icon: myBlueIcon}).addTo(mymap);
markerSG.bindPopup("<b>University of Southampton</b><br>Singapore, Singapore<br>Stuart C Clarke").openPopup();

markerSG.on({
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

var markerSlovenia = L.marker([46.151241, 14.995463], {icon: myBlueIcon}).addTo(mymap);
markerSlovenia.bindPopup("<b>National Laboratory of Health, Environment and Food</b><br>Celije, Slovenia<br>Metka Paragi, Tamara Kastrin").openPopup();

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

var markerSA = L.marker([30.5595, 22.9375], {icon: myBlueIcon}).addTo(mymap);
markerSA.bindPopup("<b>Centre for Respiratory Diseases and Meningitis, National Institute for Communicable Diseases and University of Witwatersrand</b><br>Johannesburg and Soweto, South Africa<br>Anne von Gottberg, Kedibone Ndlangisa, Linda De Gouveia, Mignon du Plessis, Mushal Ali, Nicole Wolter, Shabir Madhi, Susan Nzenze").openPopup();

markerSA.on({
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

var markerSpain = L.marker([40.4637, 3.7492], {icon: myBlueIcon}).addTo(mymap);
markerSpain.bindPopup("<b>Molecular Microbiology Department, Hospital Sant Joan de Deu</b><br>Barcelona, Spain<br>Carmen Muñoz Almagro").openPopup();

markerSpain.on({
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

var markerThailand = L.marker([15.870032, 100.992538], {icon: myBlueIcon}).addTo(mymap);
markerThailand.bindPopup("<b>University of Oxford, University of Southampton, Faculty of Medicine Siriraj Hospital, Mahidol University, Faculty of Medicine, Siam University</b><br>Maesot and Bangkok, Thailand<br>Paul Turner, Stuart Clarke, Somporn Srifuengfung").openPopup();

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


var markerGM = L.marker([13.4432, 15.3101], {icon: myBlueIcon}).addTo(mymap);
markerGM.bindPopup("<b>Medical Research Council Unit The Gambia</b><br>Banjul, The Gambia<br>Brenda Kwambana-Adams, Ebenezer Foster-Nyarko, Ebrima Bojang, Martin Antonio, Peggy-Estelle Tientcheu").openPopup();

markerGM.on({
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

var markerTogo = L.marker([8.6195, 0.8248], {icon: myBlueIcon}).addTo(mymap);
markerTogo.bindPopup("<b>Agence de Médecine Préventive</b><br>Lome, Togo<br>Jennifer Moïsi").openPopup();

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

var markerTAT = L.marker([10.6918, 61.2225], {icon: myBlueIcon}).addTo(mymap);
markerTAT.bindPopup("<b>Agence de Médecine Préventive</b><br>St. Augustine, Trinidad and Tobago<br>Michele Nurse-Lucas, Patrick E Akpaka").openPopup();

markerTAT.on({
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


var markerTurkey = L.marker([38.9637, 35.2433], {icon: myBlueIcon}).addTo(mymap);
markerTurkey.bindPopup("<b>Hacettepe University Faculty of Medicine</b><br>Ankara, Turkey<br>Özgen Köseoglu Eser").openPopup();

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


var markerUK = L.marker([52.0785, 0.1861], {icon: myBlueIcon}).addTo(mymap);
markerUK.bindPopup("<b>Wellcome Sanger Institute and Imperial College London</b><br>Cambridge and London, UK<br>Alison Maguire, David Aanensen, Leon Bentley, Jyothish N Nair Thulasee Bhai, Nicholas Croucher, Rafal Mostowy, Rebecca Gladstone, Rebecca Henderson, Stephanie Lo, Stephen Bentley").openPopup();

markerUK.on({
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

var markerUSA = L.marker([37.09024, -95.712891], {icon: myBlueIcon}).addTo(mymap);
markerUSA.bindPopup("<b>Ceners for Disease Control and Prevention, Emory University and Bill & Melinda Gates Foundation</b><br>Atlanta and Seattle, USA<br>Bernard Beall, Jennifer Verani, Lesley McGee, Paulina Hawkins, Robert F Breiman, Keith Klugman").openPopup();

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