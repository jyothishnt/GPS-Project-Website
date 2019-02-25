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
    { category: "Sampling Years", 1989: '0', 1990: '0', 1991: '0', 1992: '0', 1993: '0', 1994: '0', 1995: '0', 1996: '0', 1997: '0', 1998: '75', 1999: '53', 2000: '0', 2001: '0', 2002: '0', 2003: '0', 2004: '0', 2005: '0', 2006: '0', 2007: '0', 2008: '0', 2009: '0', 2010: '41', 2011: '95', 2012: '100', 2013: '62', 2014: '0', 2015: '0', 2016: '0', 2017: '0', 'unknown': '0' }
    ];
}
if (countryValue == 'Bangladesh') {
  var data = [
    { category: "Sampling Years", 1989: '0', 1990: '0', 1991: '0', 1992: '0', 1993: '0', 1994: '0', 1995: '0', 1996: '0', 1997: '0', 1998: '0', 1999: '0', 2000: '0', 2001: '0', 2002: '2', 2003: '13', 2004: '28', 2005: '56', 2006: '55', 2007: '67', 2008: '70', 2009: '37', 2010: '33', 2011: '44', 2012: '40', 2013: '53', 2014: '35', 2015: '21', 2017: '1', 'unknown': '2' }
    ];
}
if (countryValue == 'Belarus') {
  var data = [
    { category: "Sampling Years", 1989: '0', 1990: '0', 1991: '0', 1992: '0', 1993: '0', 1994: '0', 1995: '0', 1996: '0', 1997: '0', 1998: '0', 1999: '0', 2000: '0', 2001: '0', 2002: '0', 2003: '0', 2004: '0', 2005: '0', 2006: '0', 2007: '0', 2008: '0', 2009: '0', 2010: '0', 2011: '0', 2012: '0', 2013: '24', 2014: '58', 2015: '14', 2016: '2', 2017: '0', 'unknown': '0' }
    ];
}
if (countryValue == 'Brazil') {
  var data = [
    { category: "Sampling Years", 1989: '0', 1990: '0', 1991: '0', 1992: '0', 1993: '0', 1994: '0', 1995: '0', 1996: '0', 1997: '0', 1998: '0', 1999: '0', 2000: '0', 2001: '0', 2002: '0', 2003: '0', 2004: '0', 2005: '0', 2006: '0', 2007: '0', 2008: '119', 2009: '82', 2010: '0', 2011: '0', 2012: '115', 2013: '104', 2014: '0', 2015: '0', 2016: '0', 2017: '0','unknown': '0' }
    ];
}
if (countryValue == 'Cambodia') {
  var data = [
    { category: "Sampling Years", 1989: '0', 1990: '0', 1991: '0', 1992: '0', 1993: '0', 1994: '0', 1995: '0', 1996: '0', 1997: '0', 1998: '0', 1999: '0', 2000: '0', 2001: '0', 2002: '0', 2003: '0', 2004: '0', 2005: '0', 2006: '0', 2007: '0', 2008: '0', 2009: '0', 2010: '0', 2011: '0', 2012: '0', 2013: '26', 2014: '263', 2015: '103', 2016: '277', 2017: '244', 'unknown': '0' }
    ];
}
if (countryValue == 'China') {
  var data = [
    { category: "Sampling Years", 1989: '0', 1990: '0', 1991: '0', 1992: '0', 1993: '0', 1994: '0', 1995: '9', 1996: '14', 1997: '14', 1998: '21', 1999: '34', 2000: '165', 2001: '25', 2002: '0', 2003: '0', 2004: '0', 2005: '0', 2006: '0', 2007: '0', 2008: '0', 2009: '65', 2010: '25', 2011: '39', 2012: '31', 2013: '40', 2014: '11', 2015: '9', 2016: '1', 2017: '1', 'unknown': '0' }
    ];
}
if (countryValue == 'Ethiopia') {
  var data = [
    { category: "Sampling Years", 1989: '0', 1990: '0', 1991: '0', 1992: '0', 1993: '0', 1994: '0', 1995: '0', 1996: '0', 1997: '0', 1998: '0', 1999: '0', 2000: '0', 2001: '0', 2002: '0', 2003: '0', 2004: '0', 2005: '0', 2006: '0', 2007: '0', 2008: '0', 2009: '0', 2010: '0', 2011: '0', 2012: '0', 2013: '0', 2014: '0', 2015: '0', 2016: '0', 2017: '0', 'unknown': '100' }
    ];
}
if (countryValue == 'The Gambia') {
  var data = [
    { category: "Sampling Years", 1989: '0', 1990: '0', 1991: '0', 1992: '0', 1993: '1', 1994: '0', 1995: '0', 1996: '13', 1997: '3', 1998: '11', 1999: '8', 2000: '1', 2001: '2', 2002: '19', 2003: '29', 2004: '3', 2005: '3', 2006: '1', 2007: '47', 2008: '72', 2009: '1040', 2010: '190', 2011: '48', 2012: '45', 2013: '46', 2014: '65', 2015: '0', 2016: '0', 2017: '0', 'unknown': '0' }
    ];
}
if (countryValue == 'Hong Kong') {
  var data = [
    { category: "Sampling Years", 1989: '0', 1990: '0', 1991: '0', 1992: '0', 1993: '0', 1994: '0', 1995: '9', 1996: '14', 1997: '14', 1998: '23', 1999: '35', 2000: '172', 2001: '28', 2002: '0', 2003: '0', 2004: '0', 2005: '0', 2006: '4', 2007: '7', 2008: '3', 2009: '67', 2010: '20', 2011: '29', 2012: '28', 2013: '21', 2014: '0', 2015: '0', 2016: '0', 2017: '0', 'unknown': '0' }
    ];
}
if (countryValue == 'India') {
  var data = [
    { category: "Sampling Years", 1989: '0', 1990: '0', 1991: '0', 1992: '0', 1993: '0', 1994: '0', 1995: '0', 1996: '2', 1997: '1', 1998: '3', 1999: '5', 2000: '0', 2001: '0', 2002: '0', 2003: '0', 2004: '0', 2005: '0', 2006: '0', 2007: '3', 2008: '9', 2009: '11', 2010: '14', 2011: '0', 2012: '0', 2013: '5', 2014: '29', 2015: '24', 2016: '8', 2017: '0', 'unknown': '0' }
    ];
}
if (countryValue == 'Israel') {
  var data = [
    { category: "Sampling Years", 1989: '0', 1990: '0', 1991: '0', 1992: '0', 1993: '0', 1994: '0', 1995: '0', 1996: '0', 1997: '0', 1998: '0', 1999: '0', 2000: '0', 2001: '0', 2002: '0', 2003: '0', 2004: '0', 2005: '95', 2006: '122', 2007: '138', 2008: '65', 2009: '168', 2010: '112', 2011: '131', 2012: '121', 2013: '122', 2014: '69', 2015: '0', 2016: '0', 2017: '0', 'unknown': '0' }
    ];
}
if (countryValue == 'Malawi') {
  var data = [
    { category: "Sampling Years", 1989: '0', 1990: '0', 1991: '0', 1992: '0', 1993: '0', 1994: '0', 1995: '0', 1996: '0', 1997: '2', 1998: '1', 1999: '4', 2000: '34', 2001: '14', 2002: '6', 2003: '18', 2004: '59', 2005: '61', 2006: '42', 2007: '30', 2008: '19', 2009: '329', 2010: '145', 2011: '21', 2012: '35', 2013: '49', 2014: '353', 2015: '82', 2017: '0','unknown': '0' }
    ];
}
if (countryValue == 'Mozambique') {
  var data = [
    { category: "Sampling Years", 1989: '0', 1990: '0', 1991: '0', 1992: '0', 1993: '0', 1994: '0', 1995: '0', 1996: '1', 1997: '0', 1998: '0', 1999: '0', 2000: '0', 2001: '0', 2002: '0', 2003: '0', 2004: '0', 2005: '0', 2006: '0', 2007: '0', 2008: '45', 2009: '59', 2010: '62', 2011: '0', 2012: '0', 2013: '0', 2014: '0', 2015: '0', 2016: '0', 2017: '0', 'unknown': '0' }
    ];
}
if (countryValue == 'Nepal') {
  var data = [
    { category: "Sampling Years", 1989: '0', 1990: '0', 1991: '0', 1992: '0', 1993: '0', 1994: '0', 1995: '0', 1996: '0', 1997: '0', 1998: '0', 1999: '0', 2000: '0', 2001: '0', 2002: '0', 2003: '0', 2004: '0', 2005: '7', 2006: '2', 2007: '10', 2008: '13', 2009: '88', 2010: '0', 2011: '11', 2012: '90', 2013: '4', 2014: '191', 2015: '0', 2016: '0', 2017: '0','unknown': '0' }
    ];
}
if (countryValue == 'Nigeria') {
  var data = [
    { category: "Sampling Years", 1989: '0', 1990: '0', 1991: '0', 1992: '0', 1993: '0', 1994: '0', 1995: '0', 1996: '0', 1997: '0', 1998: '0', 1999: '1', 2000: '0', 2001: '0', 2002: '0', 2003: '0', 2004: '0', 2005: '0', 2006: '0', 2007: '0', 2008: '0', 2009: '0', 2010: '1', 2011: '0', 2012: '0', 2013: '0', 2014: '17', 2015: '42', 2016: '6', 2017: '0','unknown': '0' }
    ];
}
if (countryValue == 'Pakistan') {
  var data = [
    { category: "Sampling Years", 1989: '0', 1990: '0', 1991: '0', 1992: '0', 1993: '0', 1994: '0', 1995: '0', 1996: '0', 1997: '0', 1998: '0', 1999: '1', 2000: '0', 2001: '0', 2002: '0', 2003: '0', 2004: '0', 2005: '0', 2006: '0', 2007: '0', 2008: '0', 2009: '0', 2010: '3', 2011: '1', 2012: '1', 2013: '53', 2014: '1', 2015: '6', 2016: '4', 2017: '0', 'unknown': '32' }
    ];
}
if (countryValue == 'Papua New Guinea') {
  var data = [
    { category: "Sampling Years", 1989: '2', 1990: '10', 1991: '11', 1992: '7', 1993: '3', 1994: '0', 1995: '15', 1996: '1', 1997: '13', 1998: '21', 1999: '21', 2000: '22', 2001: '14', 2002: '13', 2003: '2', 2004: '0', 2005: '0', 2006: '0', 2007: '0', 2008: '0', 2009: '0', 2010: '0', 2011: '0', 2012: '0', 2013: '1', 2014: '5', 2015: '0', 2016: '0', 2017: '0', 'unknown': '4' }
    ];
}
if (countryValue == 'Peru') {
  var data = [
    { category: "Sampling Years", 1989: '0', 1990: '0', 1991: '0', 1992: '0', 1993: '0', 1994: '0', 1995: '0', 1996: '0', 1997: '0', 1998: '0', 1999: '0', 2000: '0', 2001: '0', 2002: '0', 2003: '0', 2004: '0', 2005: '0', 2006: '31', 2007: '118', 2008: '250', 2009: '142', 2010: '46', 2011: '20', 2012: '0', 2013: '0', 2014: '0', 2015: '0', 2016: '0', 2017: '0', 'unknown': '0' }
    ];
}
if (countryValue == 'Poland') {
  var data = [
    { category: "Sampling Years", 1989: '0', 1990: '0', 1991: '0', 1992: '0', 1993: '0', 1994: '0', 1995: '0', 1996: '0', 1997: '0', 1998: '0', 1999: '0', 2000: '0', 2001: '0', 2002: '0', 2003: '0', 2004: '0', 2005: '0', 2006: '0', 2007: '14', 2008: '22', 2009: '27', 2010: '30', 2011: '32', 2012: '37', 2013: '27', 2014: '0', 2015: '0', 2016: '0', 2017: '0', 'unknown': '0' }
    ];
}
if (countryValue == 'Qatar') {
  var data = [
    { category: "Sampling Years", 1989: '0', 1990: '0', 1991: '0', 1992: '0', 1993: '0', 1994: '0', 1995: '0', 1996: '0', 1997: '0', 1998: '0', 1999: '1', 2000: '0', 2001: '0', 2002: '0', 2003: '0', 2004: '0', 2005: '0', 2006: '0', 2007: '0', 2008: '0', 2009: '19', 2010: '21', 2011: '6', 2012: '14', 2013: '35', 2014: '21', 2015: '0', 2016: '0', 2017: '0','unknown': '0' }
    ];
}
if (countryValue == 'South Africa') {
  var data = [
    { category: "Sampling Years", 1989: '0', 1990: '0', 1991: '1', 1992: '0', 1993: '0', 1994: '0', 1995: '0', 1996: '0', 1997: '0', 1998: '0', 1999: '0', 2000: '0', 2001: '0', 2002: '0', 2003: '0', 2004: '0', 2005: '286', 2006: '298', 2007: '321', 2008: '284', 2009: '635', 2010: '633', 2011: '636', 2012: '650', 2013: '588', 2014: '283', 2015: '0', 2017: '0','unknown': '0' }
    ];
}
if (countryValue == 'Thailand') {
  var data = [
    { category: "Sampling Years", 1989: '0', 1990: '0', 1991: '0', 1992: '0', 1993: '0', 1994: '0', 1995: '0', 1996: '0', 1997: '0', 1998: '0', 1999: '1', 2000: '0', 2001: '0', 2002: '0', 2003: '0', 2004: '0', 2005: '0', 2006: '0', 2007: '2', 2008: '1', 2009: '43', 2010: '55', 2011: '86', 2012: '54', 2013: '4', 2014: '3', 2015: '0', 2017: '0','unknown': '0' }
    ];
}
if (countryValue == 'Togo') {
  var data = [
    { category: "Sampling Years", 1989: '0', 1990: '0', 1991: '0', 1992: '0', 1993: '0', 1994: '0', 1995: '0', 1996: '0', 1997: '0', 1998: '0', 1999: '1', 2000: '0', 2001: '0', 2002: '0', 2003: '0', 2004: '0', 2005: '0', 2006: '0', 2007: '3', 2008: '1', 2009: '3', 2010: '11', 2011: '49', 2012: '40', 2013: '7', 2014: '11', 2015: '0', 2016: '0', 2017: '0', 'unknown': '0' }
    ];
}
if (countryValue == 'USA') {
  var data = [
    { category: "Sampling Years", 1989: '0', 1990: '0', 1991: '0', 1992: '0', 1993: '0', 1994: '0', 1995: '0', 1996: '0', 1997: '0', 1998: '147', 1999: '257', 2000: '55', 2001: '38', 2002: '31', 2003: '25', 2004: '30', 2005: '35', 2006: '30', 2007: '26', 2008: '40', 2009: '524', 2010: '0', 2011: '0', 2012: '346', 2013: '0', 2014: '0', 2015: '0', 2016: '0', 2017: '0', 'unknown': '0' }
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
       .range(['#bdb5b0', "#949aa4", '#b5f0fd', '#98d7fb', '#6289F4', '#4855f0', '#432fea', '#645cc1', '#71879d', '#8098a8', '#8fa9b3', '#9eb9be', '#aecbc9', '#bacdbc', '#cbcfa6', '#dbd28d', '#e9d574', '#f0b556', '#f2973a', '#f3842a', '#f27419', "#f16000", "#d25c4d", "#b33040", "#800000", "#b3654c", "#c28067", '#cf9a82', "#dcb59f", "#e7d1bc"
      ]);
      
    var stack = d3.stack()
      .order(d3.stackOrderNone)
      .offset(d3.stackOffsetExpand);  
    
    //data.forEach(function(d){d.satisfied=d.totalHours-d.leftHours});
    //data.sort(function(a, b) { return b.totalHours-a.totalHours; });
    
    x.domain(data.map(function(d) { return d.category; }));
    z.domain(["1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "unknown"]);
    
    var serie = g.selectAll(".serie")
      .data(stack.keys(["1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", 'unknown'])(data))
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
        .classed("modalRect", true)
        .append("title")
        .attr("id", "popup")
        .text(function(d) {
          //return d.data.key + " " + ((d[0] - d[1]) * 100) + "%";
          var percent = (d[0]  -  d[1])
          var res = percent.toFixed(3).replace(/-/i, " ")
          //return k(d.key) + " " + (res * 100) + "%";
          return (res * 100) + "%";
      });
    
     g.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
    
    g.append("g")
        .attr("class", "axis axis--y")
        .call(d3.axisLeft(y).ticks(10, "%"));
    
    var colors = ['#bdb5b0', "#949aa4", '#b5f0fd', '#98d7fb', '#6289F4', '#4855f0', '#432fea', '#645cc1', '#71879d', '#8098a8', '#8fa9b3', '#9eb9be', '#aecbc9', '#bacdbc', '#cbcfa6', '#dbd28d', '#e9d574', '#f0b556', '#f2973a', '#f3842a', '#f27419', "#f16000", "#d25c4d", "#b33040", "#800000", "#b3654c", "#c28067", '#cf9a82', "#dcb59f", "#e7d1bc"
    ];
    
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
              case 24: return '#4855f0'; 
              case 25: return '#6289F4';
              case 26: return '#98d7fb';
              case 27: return '#b5f0fd';
              case 28: return "#949aa4";
              case 29: return '#bdb5b0';
            } 
          }); 
          // '#7a5dd3'; 
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
              case 1: return "2017";
              case 2: return "2016";
              case 3: return "2015";
              case 4: return "2014";
              case 5: return "2013";
              case 6: return "2012";
              case 7: return "2011";
              case 8: return "2010";
              case 9: return "2009";
              case 10: return "2008";
              case 11: return "2007";
              case 12: return "2006";
              case 13: return "2005";
              case 14: return "2004";
              case 15: return "2003";
              case 16: return "2002";
              case 17: return "2001";
              case 18: return "2000";
              case 19: return "1999";
              case 20: return "1998";
              case 21: return "1997";
              case 22: return "1996";
              case 23: return "1995";
              case 24: return "1994";
              case 25: return "1993";
              case 26: return "1992";
              case 27: return "1991";
              case 28: return "1990";
              case 29: return "1989";
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
