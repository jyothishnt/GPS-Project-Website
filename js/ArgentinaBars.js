//import * as d3 from "d3"; 
// Setup svg using Bostock's margin convention

var margin = {top: 20, right: 160, bottom: 35, left: 30};

var width = 130 - margin.left - margin.right,
    height = 396 - margin.top - margin.bottom;

var legendWidth = 250 - margin.left - margin.right,
    legendHeight = 200 - margin.top - margin.bottom;

//var container = d3.select(".modal-body")
var container = d3.select("#bar-one")
  //.append("div")
  .attr("width", width + margin.left + margin.right)
  .append("svg")
  .attr("width", 150) 
  .attr("height", 300)
  .classed(".firstbar", true);

/* Data in strings like it would be if imported from a csv */

//if ($("#exampleModalLabel.modal-title").text("Argentina")) {
//if (country == 'Argentina') {
countryValue = d3.select("#exampleModalLabel.modal-title").text();
if (countryValue == 'Argentina') {
  var data = [
    { category: "Sampling Years", 1989: '0', 1990: '0', 1991: '0', 1992: '0', 1993: '0', 1995: '0', 1996: '0', 1997: '0', 1998: '75', 1999: '53', 2000: '0', 2001: '0', 2002: '0', 2003: '0', 2004: '0', 2005: '0', 2006: '0', 2007: '0', 2008: '0', 2009: '0', 2010: '41', 2011: '95', 2012: '100', 2013: '62' }
    ];
}
if (countryValue == 'Bangladesh') {
  var data = [
    { category: "Sampling Years", 1989: '0', 1990: '0', 1991: '0', 1992: '0', 1993: '0', 1995: '0', 1996: '0', 1997: '0', 1998: '0', 1999: '0', 2000: '0', 2001: '0', 2002: '2', 2003: '13', 2004: '28', 2005: '56', 2006: '55', 2007: '67', 2008: '70', 2009: '37', 2010: '33', 2011: '44', 2012: '40', 2013: '53', 2014: '35', 2015: '21', 2017: '1', 'unknown': '2' }
    ];
}
if (countryValue == 'Belarus') {
  var data = [
    { category: "Sampling Years", 1989: '0', 1990: '0', 1991: '0', 1992: '0', 1993: '0', 1995: '0', 1996: '0', 1997: '0', 1998: '0', 1999: '0', 2000: '0', 2001: '0', 2002: '0', 2003: '0', 2004: '0', 2005: '0', 2006: '0', 2007: '0', 2008: '0', 2009: '0', 2010: '0', 2011: '0', 2012: '0', 2013: '24', 2014: '58', 2015: '14', 2016: '2', 'unknown': '0' }
    ];
}
if (countryValue == 'Brazil') {
  var data = [
    { category: "Sampling Years", 1989: '0', 1990: '0', 1991: '0', 1992: '0', 1993: '0', 1995: '0', 1996: '0', 1997: '0', 1998: '0', 1999: '0', 2000: '0', 2001: '0', 2002: '0', 2003: '0', 2004: '0', 2005: '0', 2006: '0', 2007: '0', 2008: '119', 2009: '87', 2010: '0', 2011: '0', 2012: '102', 2013: '103', 2014: '0', 'unknown': '0' }
    ];
}
if (countryValue == 'India') {
  var data = [
    { category: "Sampling Years", 1989: '0', 1990: '0', 1991: '0', 1992: '0', 1993: '0', 1995: '0', 1996: '0', 1997: '0', 1998: '0', 1999: '0', 2000: '0', 2001: '0', 2002: '0', 2003: '0', 2004: '0', 2005: '0', 2006: '0', 2007: '0', 2008: '0', 2009: '12', 2010: '15', 2011: '1', 2012: '0', 2013: '20', 2014: '142', 2015: '55', 2016: '130', 2017: '10', 'unknown': '0' }
    ];
}
if (countryValue == 'Israel') {
  var data = [
    { category: "Sampling Years", 1989: '0', 1990: '0', 1991: '0', 1992: '0', 1993: '0', 1995: '0', 1996: '0', 1997: '0', 1998: '0', 1999: '0', 2000: '0', 2001: '0', 2002: '0', 2003: '0', 2004: '0', 2005: '98', 2006: '126', 2007: '139', 2008: '69', 2009: '176', 2010: '116', 2011: '134', 2012: '121', 2013: '123', 2014: '69', 2015: '0', 2016: '0', 2017: '0', 'unknown': '1' }
    ];
}
if (countryValue == 'Mozambique') {
  var data = [
    { category: "Sampling Years", 1989: '0', 1990: '0', 1991: '0', 1992: '0', 1993: '0', 1995: '0', 1996: '5', 1997: '0', 1998: '0', 1999: '1', 2000: '0', 2001: '0', 2002: '0', 2003: '0', 2004: '0', 2005: '0', 2006: '0', 2007: '0', 2008: '46', 2009: '65', 2010: '64', 2011: '0', 2012: '0', 2013: '0', 2014: '0', 2015: '0', 2016: '0', 2017: '0', 'unknown': '186' }
    ];
}
if (countryValue == 'Papua New Guinea') {
  var data = [
    { category: "Sampling Years", 1989: '2', 1990: '10', 1991: '11', 1992: '7', 1993: '3', 1995: '15', 1996: '1', 1997: '13', 1998: '21', 1999: '21', 2000: '22', 2001: '14', 2002: '13', 2003: '2', 2004: '0', 2005: '0', 2006: '0', 2007: '0', 2008: '0', 2009: '0', 2010: '0', 2011: '0', 2012: '0', 2013: '1', 2014: '5', 'unknown': '4' }
    ];
}
if (countryValue == 'Peru') {
  var data = [
    { category: "Sampling Years", 1989: '0', 1990: '0', 1991: '0', 1992: '0', 1993: '0', 1995: '0', 1996: '0', 1997: '0', 1998: '0', 1999: '1', 2000: '0', 2001: '0', 2002: '0', 2003: '0', 2004: '0', 2005: '0', 2006: '33', 2007: '54', 2008: '17', 2009: '31', 2010: '48', 2011: '31', 2012: '0', 2013: '0', 'unknown': '521' }
    ];
}
if (countryValue == 'South Africa') {
  var data = [
    { category: "Sampling Years", 1989: '0', 1990: '0', 1991: '1', 1992: '0', 1993: '0', 1995: '0', 1996: '0', 1997: '0', 1998: '0', 1999: '1', 2000: '0', 2001: '0', 2002: '0', 2003: '0', 2004: '0', 2005: '299', 2006: '305', 2007: '331', 2008: '299', 2009: '679', 2010: '662', 2011: '673', 2012: '682', 2013: '676', 2014: '290', 2015: '0', 2017: '0','unknown': '3' }
    ];
}
if (countryValue == 'Togo') {
  var data = [
    { category: "Sampling Years", 1989: '0', 1990: '0', 1991: '0', 1992: '0', 1993: '0', 1995: '0', 1996: '0', 1997: '0', 1998: '0', 1999: '1', 2000: '0', 2001: '0', 2002: '0', 2003: '0', 2004: '0', 2005: '0', 2006: '0', 2007: '3', 2008: '1', 2009: '3', 2010: '11', 2011: '49', 2012: '40', 2013: '7', 2014: '11', 2015: '0', 2016: '0', 2017: '0', 'unknown': '0' }
    ];
}
if (countryValue == 'USA') {
  var data = [
    { category: "Sampling Years", 1989: '0', 1990: '0', 1991: '0', 1992: '0', 1993: '0', 1995: '1', 1996: '0', 1997: '1', 1998: '252', 1999: '414', 2000: '60', 2001: '42', 2002: '37', 2003: '30', 2004: '33', 2005: '39', 2006: '38', 2007: '32', 2008: '41', 2009: '636', 2010: '0', 2011: '0', 2012: '353', 2013: '0', 'unknown': '0' }
    ];
}
/*else {
  var data = [
    { category: "Sampling Years", 1991: '0'}
  ];
} */

    var svg = d3.select(".firstbar");
      margin = {top: 20, right: 60, bottom: 30, left: 40},
      width = 150 - margin.left - margin.right,
      height = 300 - margin.top - margin.bottom,
      g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")"); 
    
    var x = d3.scaleBand()
      .rangeRound([0, width])
      .paddingInner(0.1)
      .align(0.2);
    
    var y = d3.scaleLinear()
      .range([height, 0]);
    
    var z = d3.scaleOrdinal()
      .range(["#e7d1bc", "#dcb59f", '#cf9a82', "#c28067", "#b3654c", "#800000", "#b33040", "#d25c4d", "#f16000", '#f27419', '#f3842a', '#f2973a', '#f0b556'
       ,'#e9d574'
       ,'#dbd28d'
       ,'#cbcfa6'
       ,'#bacdbc'
       ,'#aecbc9'
       ,'#9eb9be'
       ,'#8fa9b3'
       ,'#8098a8'
       ,'#71879d'
       ,'#645cc1'
       ,'#432fea'
       ,'#7a5dd3'
       ,"#949aa4"
       ,'#bdb5b0']);
    
    var stack = d3.stack()
      .order(d3.stackOrderNone)
      .offset(d3.stackOffsetExpand);  
    
    //data.forEach(function(d){d.satisfied=d.totalHours-d.leftHours});
    //data.sort(function(a, b) { return b.totalHours-a.totalHours; });
    
    x.domain(data.map(function(d) { return d.category; }));
    z.domain(["1989", "1990", "1991", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "unknown"]);
    
    var serie = g.selectAll(".serie")
      .data(stack.keys(["1989", "1990", "1991", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", 'unknown'])(data))
      .enter().append("g")
        .attr("class", "serie")
        .attr("fill", function(d) { return z(d.key); }); 
    
     serie.selectAll(".modalRect")
     //g.selectAll("rect")
      .data(function(d) {return d; })
      .enter().append("rect")
        .attr("x", function(d) {return x(d.data.category); })
        .attr("y", function(d) {return y(d[1]); })
        .attr("height", function(d) { return y(d[0]) - y(d[1]); })
        .attr("width", x.bandwidth())
        .classed("modalRect", true);
    //console.log("Value: " + d[1])
    
     g.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
    
    g.append("g")
        .attr("class", "axis axis--y")
        .call(d3.axisLeft(y).ticks(10, "%"));
    
    var colors = ["#e7d1bc", '#dcb59f', '#cf9a82', '#c28067', '#b3654c', '#800000', '#9e0803', "#b33040", "#d25c4d", '#f16000', "#f2b447", "#e9d574", "#c1d574", "#b1c574", "#D6CF97", "#e7d1bc", "#b33040", "#d25c4d", "#f2b447", "#e9d574", "#c1d574", "#b1c574", "#D6CF97", "#e7d1bc", "#949aa4", "#bdb5b0", "#aecbc9", "#e7d1bc", '#dcb59f', '#cf9a82'];
    
    var svg2 = d3.select("#legend-one");
    
    var legend = svg2.selectAll(".yearlegend")
          .data(colors)
          .enter().append("g")
          .attr("class", "yearlegend")
          .attr("transform", function(d, i) { return "translate(10," + i * 19 + ")"; });
         
        legend.append("div")
          .attr("x", width - 14)
          .attr("class", "legendBox")
          .attr("width", 14)
          .attr("height", 14)
          .style("background-color", function(d, i) {
              switch (i) {
              case 0: return "#e7d1bc";
              case 1: return "#dcb59f";
              case 2: return '#cf9a82';
              case 3: return "#c28067";
              case 4: return "#b3654c";
              case 5: return "#800000";
              case 6: return "#b33040";
              case 7: return "#d25c4d";
              case 8: return "#f16000";
              case 9: return '#f27419';
              case 10: return '#f3842a';
              case 11: return '#f2973a';
              case 12: return '#f0b556';
              case 13: return '#e9d574';
              case 14: return '#dbd28d';
              case 15: return '#cbcfa6';
              case 16: return '#bacdbc';
              case 17: return '#aecbc9';
              case 18: return '#9eb9be';
              case 19: return '#8fa9b3';
              case 20: return '#8098a8';
              case 21: return '#71879d';
              case 22: return '#645cc1';
              case 23: return '#432fea';
              case 24: return '#7a5dd3';
              case 25: return "#949aa4";
              case 26: return '#bdb5b0';
              case 27: return '#aecbc9';
              case 28: return '#9eb9be';
              case 29: return '#8fa9b3';
            } 
          }); 
        legend.append("text")
          .attr("x", width + 5)
          .attr("y", 9)
          .attr("dy", ".35em")
          .attr("class", "legendText")
          .attr("size", "8px")
          .style("text-anchor", "start")
          .text(function(d, i) { 
            switch (i) {
              case 0: return "Unknown";
              case 1: return "2014";
              case 2: return "2013";
              case 3: return "2012";
              case 4: return "2011";
              case 5: return "2010";
              case 6: return "2009";
              case 7: return "2008";
              case 8: return "2007";
              case 9: return "2006";
              case 10: return "2005";
              case 11: return "2004";
              case 12: return "2003";
              case 13: return "2002";
              case 14: return "2001";
              case 15: return "2000";
              case 16: return "1999";
              case 17: return "1998";
              case 18: return "1997";
              case 19: return "1996";
              case 20: return "1995";
              case 21: return "1994";
              case 22: return "1993";
              case 23: return "1992";
              case 24: return "1991";
              case 25: return "1990";
              case 26: return "1989";
              case 27: return "2017";
              case 28: return "2016";
              case 29: return "2015";
            }
          }); 

// Prep the tooltip bits, initial display is hidden
var tooltip = svg.attr('firstbar').append("g")
  .attr("class", "tooltip")
  //.style("display", "none");
    
tooltip.append("rect")
  .attr("width", 30)
  .attr("height", 20)
  .attr("fill", "white")
  .style("opacity", 0.5);

tooltip.append("text")
  .attr("x", 15)
  .attr("dy", "1.2em")
  .style("text-anchor", "middle")
  .attr("font-size", "12px")
  .attr("font-weight", "bold"); 
