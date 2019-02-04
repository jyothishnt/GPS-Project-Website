//import * as d3 from "d3"; 

var margin = {top: 20, right: 160, bottom: 35, left: 30};

var width = 130 - margin.left - margin.right,
    height = 396 - margin.top - margin.bottom;

var legendWidth = 250 - margin.left - margin.right,
    legendHeight = 200 - margin.top - margin.bottom;

var svg = d3.select("#bar-four")
  .attr("width", width + margin.left + margin.right)
  .append("svg")
  .attr("width", 150) 
  .attr("height", 300)
  .classed(".fourthbar", true);
  //.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")"); 

  countryValue = d3.select("#exampleModalLabel.modal-title").text();
  if (countryValue == 'Argentina') {
    var data = [
      { category: "Age group", "<=2":0, ">2<=5":0, ">5<=15":0, ">5<=18":0, ">15<=24":0, ">24<=44":0, ">44<=65":0, ">18<=65":0, ">65":0, "Unknown":0 }
      ];
  }  
  if (countryValue == 'Bangladesh') {
    var data = [
      { category: "Age group", "<=2":434, ">2<=5":66, ">5<=15":56, ">5<=18":0, ">15<=24":0, ">24<=44":0, ">44<=65":0, ">18<=65":0, ">65":0,"Unknown":1 }
      ];
  } 
  if (countryValue == 'Belarus') {
    var data = [
      { category: "Age group", "<=2":40, ">2<=5":28, ">5<=15":8, ">5<=18":0, ">15<=24":1, ">24<=44":10, ">44<=65":7, ">18<=65":0, ">65":4, "Unknown":0 }
      ];
  } 
  if (countryValue == 'Brazil') {
    var data = [
      { category: "Age group", "<=2":219, ">2<=5":53, ">5<=15":23, ">5<=18":0, ">15<=24":12, ">24<=44":35, ">44<=65":56, ">18<=65":0, ">65":13, "Unknown":1 }
      ];
  }  
  if (countryValue == 'Cambodia') {
    var data = [
      { category: "Age group", "<=2":737, ">2<=5":155, ">5<=15":21, ">5<=18":0, ">15<=24":0, ">24<=44":0, ">44<=65":0, ">18<=65":0, ">65":0, "Unknown":0 }
      ];
  }  
  if (countryValue == 'Ethiopia') {
    var data = [
      { category: "Age group", "<=2":0, ">2<=5":0, ">5<=15":0, ">5<=18":0, ">15<=24":0, ">24<=44":0, ">44<=65":0, ">18<=65":0, ">65":0, "Unknown":100 }
      ];
  }  
  if (countryValue == 'The Gambia') {
    var data = [
      { category: "Age group", "<=2":1247, ">2<=5":212, ">5<=15":0, ">5<=18":136, ">15<=24":0, ">24<=44":0, ">44<=65":0, ">18<=65":81, ">65":7, "Unknown":89 }
      ];
  }  
  if (countryValue == 'Hong Kong') {
    var data = [
      { category: "Age group", "<=2":0, ">2<=5":0, ">5<=15":0, ">5<=18":0, ">15<=24":0, ">24<=44":0, ">44<=65":0, ">18<=65":0, ">65":0, "Unknown":474 }
      ];
  }  
  if (countryValue == 'India') {
    var data = [
      { category: "Age group", "<=2":68, ">2<=5":84, ">5<=15":39, ">5<=18":0, ">15<=24":10, ">24<=44":43, ">44<=65":78, ">18<=65":0, ">65":42, "Unknown":21 }
      ];
  }  
  if (countryValue == 'Israel') {
    var data = [
      { category: "Age group", "<=2":586, ">2<=5":279, ">5<=15":98, ">5<=18":0, ">15<=24":18, ">24<=44":45, ">44<=65":46, ">18<=65":0, ">65":99, "Unknown":1 }
      ];
  }  
  if (countryValue == 'Malawi') {
    var data = [
      { category: "Age group", "<=2":716, ">2<=5":298, ">5<=15":0, ">5<=18":167, ">15<=24":0, ">24<=44":0, ">44<=65":0, ">18<=65":249, ">65":2, "Unknown":204 }
      ];
  }  
  if (countryValue == 'Mozambique') {
    var data = [
      { category: "Age group", "<=2":144, ">2<=5":20, ">5<=15":0, ">5<=18":0, ">15<=24":0, ">24<=44":0, ">44<=65":0, ">18<=65":12, ">65":0, "Unknown":191 }
      ];
  }  
  if (countryValue == 'Nepal') {
    var data = [
      { category: "Age group", "<=2":405, ">2<=5":44, ">5<=15":0, ">5<=18":27, ">15<=24":0, ">24<=44":0, ">44<=65":0, ">18<=65":0, ">65":0, "Unknown":0 }
      ];
  }  
  if (countryValue == 'Nigeria') {
    var data = [
      { category: "Age group", "<=2":56, ">2<=5":9, ">5<=15":2, ">5<=18":0, ">15<=24":0, ">24<=44":0, ">44<=65":0, ">18<=65":0, ">65":0, "Unknown":0 }
      ];
  }  
  if (countryValue == 'Pakistan') {
    var data = [
      { category: "Age group", "<=2":20, ">2<=5":3, ">5<=15":12, ">5<=18":0, ">15<=24":1, ">24<=44":0, ">44<=65":1, ">18<=65":0, ">65":1, "Unknown":64 }
      ];
  }  
  if (countryValue == 'Papua New Guinea') {
    var data = [
      { category: "Age group", "<=2":151, ">2<=5":9, ">5<=15":3, ">5<=18":0, ">15<=24":0, ">24<=44":0, ">44<=65":0, ">18<=65":0, ">65":0, "Unknown":2 }
      ];
  }  
  if (countryValue == 'Peru') {
    var data = [
      { category: "Age group", "<=2":113, ">2<=5":16, ">5<=15":0, ">5<=18":32, ">15<=24":0, ">24<=44":0, ">44<=65":0, ">18<=65":23, ">65":19, "Unknown":533 }
      ];
  }  
  if (countryValue == 'Poland') {
    var data = [
      { category: "Age group", "<=2":182, ">2<=5":85, ">5<=15":0, ">5<=18":0, ">15<=24":0, ">24<=44":0, ">44<=65":0, ">18<=65":1, ">65":2, "Unknown":0 }
      ];
  }  
  if (countryValue == 'Qatar') {
    var data = [
      { category: "Age group", "<=2":44, ">2<=5":12, ">5<=15":0, ">5<=18":6, ">15<=24":0, ">24<=44":0, ">44<=65":0, ">18<=65":24, ">65":24, "Unknown":7 }
      ];
  }  
  if (countryValue == 'South Africa') {
    var data = [
      { category: "Age group", "<=2":2582, ">2<=5":1060, ">5<=15":0, ">5<=18":327, ">15<=24":0, ">24<=44":0, ">44<=65":0, ">18<=65":23, ">65":19, "Unknown":0 }
      ];
  }  
  if (countryValue == 'Thailand') {
    var data = [
      { category: "Age group", "<=2":53, ">2<=5":41, ">5<=15":0, ">5<=18":17, ">15<=24":0, ">24<=44":0, ">44<=65":0, ">18<=65":81, ">65":56, "Unknown":1 }
      ];
  }  
  if (countryValue == 'Togo') {
    var data = [
      { category: "Age group", "<=2":27, ">2<=5":7, ">5<=15":0, ">5<=18":30, ">15<=24":0, ">24<=44":0, ">44<=65":0, ">18<=65":57, ">65":4, "Unknown":2 }
      ];
  }  
  if (countryValue == 'USA') {
    var data = [
      { category: "Age group", "<=2":984, ">2<=5":410, ">5<=15":0, ">5<=18":30, ">15<=24":0, ">24<=44":0, ">44<=65":0, ">18<=65":861, ">65":26, "Unknown":0 }
      ];
  }  
  /*else {
    var data = [
      { category: "Age group", "<=2":0, ">2<=5":0, ">5<=15":0, "Unknown":0 }
      ];
  }    */
  /*var data = [
    /*{ category: "Sampling Years", 1998: '75', 1999: '53', 2010: '41', 2011: '95', 2012: '100', 2013: '62' }, 
    { category: "Vaccine Period", PrePCV: '4', NouniversalintroductiontoPCV: '7', PostPCV7: '8', PostPCV10: '13', PostPCV13: '9'}, 
    { category: "Clinical Manifest", Disease: 426}, 
    { category: "Ages", under2: '323', between2and5: '103'}, 
    { category: "Age group", "total":426, "<=2":323, ">2<=5":103}
    ]; */
  
  var svg = d3.select(".fourthbar"),
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
    .range(['#8098a8', '#9eb9be', "#aecbc9", "#e9d574", "#f2b447", "#f16000", "#d25c4d", "#b33040", "#800000", "#e7d1bc"]);
  
  var stack = d3.stack()
    .order(d3.stackOrderNone)
    .offset(d3.stackOffsetExpand);  
  
  //data.forEach(function(d){d.satisfied=d.totalHours-d.leftHours});
  //data.sort(function(a, b) { return b.totalHours-a.totalHours; });
  
  x.domain(data.map(function(d) { return d.category; }));
  z.domain(["<=2", ">2<=5", ">5<=15", ">5<=18", ">15<=24", ">24<=44", ">44<=65", ">18<=65", ">65", "Unknown"]);
  
  var serie = g.selectAll(".serie")
    .data(stack.keys(["<=2", ">2<=5", ">5<=15", ">5<=18", ">15<=24", ">24<=44", ">44<=65", ">18<=65", ">65", "Unknown"])(data))
    .enter().append("g")
      .attr("class", "serie")
      .attr("fill", function(d) { return z(d.key); }); 
  
   serie.selectAll("rect")
   //g.selectAll("rect")
    .data(function(d) {return d; })
    .enter().append("rect")
      .attr("x", function(d) {return x(d.data.category); })
      .attr("y", function(d) {return y(d[1]); })
      .attr("height", function(d) { return y(d[0]) - y(d[1]); })
      .attr("width", x.bandwidth());
  
   g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));
  
  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(10, "%"));
  
  var colors = ['#8098a8', '#9eb9be', "#aecbc9", "#e9d574", "#f2b447", "#f16000", "#d25c4d", "#b33040", "#800000", "#e7d1bc"];
  var svg2 = d3.select("#legend-four");
  
  var legend = svg2.selectAll(".legend")
        .data(colors)
        .enter().append("g")
        .attr("class", "legend")
        .attr("transform", function(d, i) { return "translate(30," + i * 19 + ")"; });
       
      legend.append("div")
        .attr("x", width - 18)
        .attr("class", "legendBox")
        .attr("width", 18)
        .attr("height", 18)
        .style("background-color", function(d, i) {
            switch (i) {
            case 0: return "#e7d1bc";
            case 1: return "#800000";
            case 2: return "#b33040";
            case 3: return "#d25c4d";
            case 4: return "#f16000";
            case 5: return "#f2b447";
            case 6: return "#e9d574";
            case 7: return "#aecbc9";
            case 8: return '#9eb9be'; 
            case 9: return '#8098a8';
            
          }
        });
       
      legend.append("text")
        .attr("x", width + 5)
        .attr("y", 9)
        .attr("dy", ".35em")
        .attr("class", "legendText")
        .attr("size", "10px")
        .style("text-anchor", "start")
        .text(function(d, i) { 
          switch (i) {
            case 0: return "Unknown";
            case 1: return ">65";
            case 2: return '>18<=65';
            case 3: return ">44<=65";
            case 4: return ">24<=44";
            case 5: return ">15<=24";
            case 6: return '>5<=18';
            case 7: return ">5<=15";
            case 8: return '>2<=5';
            case 9: return '<=2';
          }
        });