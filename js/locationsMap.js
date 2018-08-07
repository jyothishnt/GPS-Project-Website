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
var markerArgentina = L.marker([-34.6037, -58.3816]).addTo(mymap);
markerArgentina.bindPopup("<b>Argentina</b><br>Samples: 493<br><a href='https://microreact.org/project/GPS_Argentina'>Microreact</a>").openPopup();

var markerBangladesh = L.marker([23.8103, 90.4125]).addTo(mymap);
markerBangladesh.bindPopup("<b>Bangladesh</b><br>Samples: 556<br><a href='https://microreact.org/project/GPS_Bangladesh'>Microreact</a>").openPopup();

var markerBelarus = L.marker([53.9045, 27.5615]).addTo(mymap);
markerBelarus.bindPopup("<b>Belarus</b><br>Samples: 98<br><a href='https://microreact.org/project/SyeXKdonZ'>Microreact</a>").openPopup();

var markerBrazil = L.marker([-14.2350, -51.9253]).addTo(mymap);
markerBrazil.bindPopup("<b>Brazil</b><br>Samples: 512<br><a href='https://microreact.org/project/GPS_Brazil'>Microreact</a>").openPopup();

var markerCambodia = L.marker([11.562108, 104.888535]).addTo(mymap);
markerCambodia.bindPopup("<b>Cambodia</b><br>Samples: 914<br><a href='https://microreact.org/project/GPS_Cambodia'>Microreact</a>").openPopup();

var markerEthiopia = L.marker([9.005401, 38.763611]).addTo(mymap);
markerEthiopia.bindPopup("<b>Ethiopia</b><br>Samples: 100<br><a href='https://microreact.org/project/GPS_Ethiopia'>Microreact</a>").openPopup();

var markerFrance = L.marker([48.8566, 2.3522]).addTo(mymap);
markerFrance.bindPopup("<b>France</b><br>Samples: 15<br>").openPopup();

var markerGambia = L.marker([13.4527, -16.5780]).addTo(mymap);
markerGambia.bindPopup("<b>The Gambia</b><br>Samples: 3069<br><a href='https://microreact.org/project/GPS_The-Gambia'>Microreact</a>").openPopup();

var markerHongKong = L.marker([22.3964, 114.1095]).addTo(mymap);
markerHongKong.bindPopup("<b>Hong Kong</b><br>Samples: 444<br><a href='https://microreact.org/project/GPS-HK-HKU'>Microreact</a>").openPopup();

var markerIndia = L.marker([20.5937, 78.9629]).addTo(mymap);
markerIndia.bindPopup("<b>India</b><br>Samples: 423<br><a href='https://microreact.org/project/S1Tfqn_AZ'>Microreact</a>").openPopup();

var markerIsrael = L.marker([32.0853, 34.7818]).addTo(mymap);
markerIsrael.bindPopup("<b>Israel</b><br>Samples: 1171<br><a href='https://microreact.org/project/GPS_Israel'>Microreact</a>").openPopup();

var markerMalawi = L.marker([-13.58, 33.46]).addTo(mymap);
markerMalawi.bindPopup("<b>Malawi</b><br>Samples: 1641<br><a href='https://microreact.org/project/GPS_Malawi'>Microreact</a>").openPopup();

var markerMozambique = L.marker([-25.9655, 32.5832]).addTo(mymap);
markerMozambique.bindPopup("<b>Mozambique</b><br>Samples: 365<br><a href='https://microreact.org/project/GPS_Mozambique'>Microreact</a>").openPopup();

var markerNepal = L.marker([27.42, 85.19]).addTo(mymap);
markerNepal.bindPopup("<b>Nepal</b><br>Samples: 455<br><a href='https://microreact.org/project/GPS_Nepal'>Microreact</a>").openPopup();

var markerNigeria = L.marker([9.0820, 8.6753]).addTo(mymap);
markerNigeria.bindPopup("<b>Nigeria</b><br>Samples: 107<br><a href='https://microreact.org/project/GPS_Nigeria'>Microreact</a>").openPopup();

var markerPakistan = L.marker([30.3753, 69.3451]).addTo(mymap);
markerPakistan.bindPopup("<b>Pakistan</b><br>Samples: 100<br><a href='https://microreact.org/project/GPS_Pakistan'>Microreact</a>").openPopup();

var markerPapuaNG = L.marker([-9.44314, 147.17972]).addTo(mymap);
markerPapuaNG.bindPopup("<b>Papua New Guinea</b><br>Samples: 185<br><a href='https://microreact.org/project/GPS_Papua_New_Guinea'>Microreact</a>").openPopup();

var markerPeru = L.marker([-12.046374, -77.042793]).addTo(mymap);
markerPeru.bindPopup("<b>Peru</b><br>Samples: 1019<br><a href='https://microreact.org/project/GPS_Peru'>Microreact</a>").openPopup();

var markerPoland = L.marker([52.237049, 21.017532]).addTo(mymap);
markerPoland.bindPopup("<b>Poland</b><br>Samples: 268<br><a href='https://microreact.org/project/GPS_Poland'>Microreact</a>").openPopup();

var markerQatar = L.marker([25.3548, 51.1839]).addTo(mymap);
markerQatar.bindPopup("<b>Qatar</b><br>Samples: 114<br><a href='https://microreact.org/project/GPS_Qatar'>Microreact</a>").openPopup();

var markerSouthAfrica = L.marker([-33.918861, 18.423300]).addTo(mymap);
markerSouthAfrica.bindPopup("<b>South Africa</b><br>Samples: 4865<br><a href='https://microreact.org/project/GPS_South-Africa'>Microreact</a>").openPopup();

var markerThailand = L.marker([13.736717, 100.523186]).addTo(mymap);
markerThailand.bindPopup("<b>Thailand</b><br>Samples: 247<br><a href='https://microreact.org/project/GPS_Thailand'>Microreact</a>").openPopup();

var markerTogo = L.marker([6.136629, 1.222186]).addTo(mymap);
markerTogo.bindPopup("<b>Togo</b><br>Samples: 120<br><a href='https://microreact.org/project/GPS_Togo'>Microreact</a>").openPopup();

var markerUSA = L.marker([38.889931, -87.009003]).addTo(mymap);
markerUSA.bindPopup("<b>USA</b><br>Samples: 1887<br><a href='https://microreact.org/project/GPS_United-States'>Microreact</a>").openPopup();

// locations with smaller samples without a microreact tree
var markerCanada = L.marker([45.41117, -75.69812]).addTo(mymap);
markerCanada.bindPopup("<b>Canada</b><br>Samples: 18<br>").openPopup();

var markerGuatemala = L.marker([14.628434, -90.522713]).addTo(mymap);
markerGuatemala.bindPopup("<b>Guetemala</b><br>Samples: 1<br>").openPopup();

var markerTrinidad = L.marker([10.671067, -61.521206]).addTo(mymap);
markerTrinidad.bindPopup("<b>Trinidad and Tobago</b><br>Samples: 98<br>").openPopup();

var markerEcuador = L.marker([-0.180653, -78.467834]).addTo(mymap);
markerEcuador.bindPopup("<b>Ecuador</b><br>Samples: 1<br>").openPopup();

var markerSweden = L.marker([59.334591, 18.063240]).addTo(mymap);
markerSweden.bindPopup("<b>Sweden</b><br>Samples: 1<br>").openPopup();

var markerLatvia = L.marker([56.946285, 24.105078]).addTo(mymap);
markerLatvia.bindPopup("<b>Latvia</b><br>Samples: 10<br>").openPopup();

var markerLithuania = L.marker([54.687157, 25.279652]).addTo(mymap);
markerLithuania.bindPopup("<b>Lithuania</b><br>Samples: 11<br>").openPopup();

var markerNetherlands = L.marker([52.370216, 4.895168]).addTo(mymap);
markerNetherlands.bindPopup("<b>Netherlands</b><br>Samples: 30<br>").openPopup();

var markerSlovenia = L.marker([46.056946, 14.505751]).addTo(mymap);
markerSlovenia.bindPopup("<b>Slovenia</b><br>Samples: 96<br>").openPopup();

var markerHungary = L.marker([47.497913, 19.040236]).addTo(mymap);
markerHungary.bindPopup("<b>Hungary</b><br>Samples: 17<br>").openPopup();

var markerBulgaria = L.marker([42.698334, 23.319941]).addTo(mymap);
markerBulgaria.bindPopup("<b>Bulgaria</b><br>Samples: 16<br>").openPopup();

var markerNewZealand = L.marker([-36.484461, 174.763336]).addTo(mymap);
markerNewZealand.bindPopup("<b>New Zealand</b><br>Samples: 87<br>").openPopup();

var markerIndonesia = L.marker([-6.21462, 106.84513]).addTo(mymap);
markerIndonesia.bindPopup("<b>Indonesia</b><br>Samples: 5<br>").openPopup();

var markerMalaysia = L.marker([3.1412, 101.68653]).addTo(mymap);
markerMalaysia.bindPopup("<b>Malaysia</b><br>Samples: 36<br>").openPopup();

var markerChina = L.marker([39.9042, 116.4074]).addTo(mymap);
markerChina.bindPopup("<b>China</b><br>Samples: 548<br>").openPopup();

var markerMongolia = L.marker([47.921230, 106.918556]).addTo(mymap);
markerMongolia.bindPopup("<b>Mongolia</b><br>Samples: 15<br>").openPopup();

var markerRussia = L.marker([55.921230, 57.918556]).addTo(mymap);
markerRussia.bindPopup("<b>Russia</b><br>Samples: 87<br>").openPopup();

var markerOman = L.marker([23.614328, 58.545284]).addTo(mymap);
markerOman.bindPopup("<b>Oman</b><br>Samples: 1<br>").openPopup();

var markerKuwait = L.marker([29.378586, 47.990341]).addTo(mymap);
markerKuwait.bindPopup("<b>Kuwait</b><br>Samples: 1<br>").openPopup();

var markerTurkey = L.marker([41.015137, 28.979530]).addTo(mymap);
markerTurkey.bindPopup("<b>Turkey</b><br>Samples: 80<br>").openPopup();

var markerEgypt = L.marker([25.215137, 29.979530]).addTo(mymap);
markerEgypt.bindPopup("<b>Egypt</b><br>Samples: 34<br>").openPopup();

var markerKenya = L.marker([-1.2833, 36.8167]).addTo(mymap);
markerKenya.bindPopup("<b>Kenya</b><br>Samples: 1<br>").openPopup();

var markerBotswana = L.marker([-24.653257, 25.906792]).addTo(mymap);
markerBotswana.bindPopup("<b>Botswana</b><br>Samples: 8<br>").openPopup();

var markerCentralAfRep = L.marker([6.6111112, 20.9394436]).addTo(mymap);
markerCentralAfRep.bindPopup("<b>Central African Republic</b><br>Samples: 4<br>").openPopup();

var markerMorocco = L.marker([34.01325, -6.83255]).addTo(mymap);
markerMorocco.bindPopup("<b>Morocco</b><br>Samples: 47<br>").openPopup();

var markerNiger = L.marker([13.5137, 2.1098]).addTo(mymap);
markerNiger.bindPopup("<b>Niger</b><br>Samples: 19<br>").openPopup();

var markerIvoryCoast = L.marker([5.345317, -4.024429]).addTo(mymap);
markerIvoryCoast.bindPopup("<b>Ivory Coast</b><br>Samples: 2<br>").openPopup();

var markerGhana = L.marker([5.5560, -0.1969]).addTo(mymap);
markerGhana.bindPopup("<b>Ghana</b><br>Samples: 43<br>").openPopup();

var markerBenin = L.marker([9.3217, 2.3100]).addTo(mymap);
markerBenin.bindPopup("<b>Benin</b><br>Samples: 5<br>").openPopup();

var markerSenegal = L.marker([14.6937, -17.44406]).addTo(mymap);
markerSenegal.bindPopup("<b>Senegal</b><br>Samples: 40<br>").openPopup();

var markerCameroon = L.marker([7.3696, 12.3446]).addTo(mymap);
markerCameroon.bindPopup("<b>Cameroon</b><br>Samples: 29<br>").openPopup();

var markerDRCongo = L.marker([-4.322447, 15.307045]).addTo(mymap);
markerDRCongo.bindPopup("<b>Democratic Republic of the Congo</b><br>Samples: 1<br>").openPopup();


