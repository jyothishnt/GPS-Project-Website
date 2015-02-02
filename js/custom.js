// Loading google map script
function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB0BK5mGGB4ASJEgvsZG1a6P4U5Jg3HxxA&sensor=false&' +
      'callback=initialize';
  document.body.appendChild(script);
}

// Draw google chart 
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Source', 'No. of samples'],
    ['Malawi',  2000],
    ['USA',  2000],
    ['Global Strain bank', 3000],
    ['Gambia and West Africa',  3000],
    ['South Africa', 4000],
    ['Other GAVI eligible countries',  6000]
  ]);

  var options = {
    title: 'Sampling Allocation',
    tooltip: {text: 'percentage'},
    pieSliceText: "none"
  };

  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
