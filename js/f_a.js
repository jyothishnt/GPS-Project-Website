var map;
var geocoder;
var url = '';
var addr;
var partners = [] ;

function loadPartners() {
  url = 'partners.txt';
  $.ajax({
    cache: false,
    async: true,
    dataType: "text",
    url: url,
    success: function(res) {
      buildPartners(res) ;
      buildTable('f_a_datatable');
    },
    error: function(jqxhr, errorText) {
      $('.msg').html('Sorry, not availble now. Please try after sometime.');
      return 0;
    }
  });
  return 0;
}

var legend = document.getElementById('dataTable');
var div = document.createElement('div');
legend.appendChild(div);


google.maps.event.addDomListener(window, 'load', loadPartners);

// Build the partners golbal vaiable from tabbed text
function buildPartners ( tabbed_text ) {
  let rows = tabbed_text.split("\n"); // Text => rows
  let header = rows.shift().split("\t") ; // Take first row and split into columns

  // Now parse the rows
  partners = [] ;
  $.each ( rows , function ( row_num , row ) {
      row = row.split("\t") ;
      if ( row.length != header.length ) return ; // Paranoia
      let partner = { row_num } ;
      $.each ( header , function ( col_num , col_header ) {
          partner[col_header.toLowerCase()] = row[col_num] ;
      } ) ;
      partners.push ( partner ) ;
  } ) ;
}

// Build table content from partners
function buildTable(ele) {

  let div = document.getElementById(ele);
  let table_str = "<table class='table table-striped'><th>Contact</th><th>Institution</th><th>City</th><th>Country</th>"
  // Reading data from a 2D array
  $.each(partners, function(i, partner) {
    //$.each(arr, function(j, map) {
    table_str += "<tr><td>"+ partner.name +"</td><td>" + partner.affiliation + "</td><td>" + partner.city + "</td><td>" + partner.country + "</td></tr>";
    //});
  })
  table_str += "</table>";
  $(div).html(table_str);
}

