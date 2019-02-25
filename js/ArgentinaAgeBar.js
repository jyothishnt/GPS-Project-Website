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
      { category: "Age group", "<=2":231, ">2<=5":52, ">5<=15":21, ">5<=18":0, ">15<=24":14, ">24<=44":34, ">44<=65":55, ">18<=65":0, ">65":13, "Unknown":0 }
      ];
  }  
  if (countryValue == 'Cambodia') {
    var data = [
      { category: "Age group", "<=2":737, ">2<=5":155, ">5<=15":21, ">5<=18":0, ">15<=24":0, ">24<=44":0, ">44<=65":0, ">18<=65":0, ">65":0, "Unknown":0 }
      ];
  }  
  if (countryValue == 'China') {
    var data = [
      { category: "Age group", "<=2":143, ">2<=5":288, ">5<=15":21, ">5<=18":0, ">15<=24":4, ">24<=44":2, ">44<=65":15, ">18<=65":0, ">65":31, "Unknown":0 }
      ];
  }  
  if (countryValue == 'Ethiopia') {
    var data = [
      { category: "Age group", "<=2":0, ">2<=5":0, ">5<=15":0, ">5<=18":0, ">15<=24":0, ">24<=44":0, ">44<=65":0, ">18<=65":0, ">65":0, "Unknown":100 }
      ];
  }  
  if (countryValue == 'The Gambia') {
    var data = [
      { category: "Age group", "<=2":1230, ">2<=5":202, ">5<=15":123, ">5<=18":0, ">15<=24":21, ">24<=44":37, ">44<=65":28, ">18<=65":0, ">65":6, "Unknown":0 }
      ];
  }  
  if (countryValue == 'Hong Kong') {
    var data = [
      { category: "Age group", "<=2":0, ">2<=5":0, ">5<=15":0, ">5<=18":0, ">15<=24":0, ">24<=44":0, ">44<=65":0, ">18<=65":0, ">65":0, "Unknown":474 }
      ];
  }  
  if (countryValue == 'India') {
    var data = [
      { category: "Age group", "<=2":63, ">2<=5":41, ">5<=15":1, ">5<=18":0, ">15<=24":0, ">24<=44":3, ">44<=65":3, ">18<=65":0, ">65":3, "Unknown":0 }
      ];
  }  
  if (countryValue == 'Israel') {
    var data = [
      { category: "Age group", "<=2":570, ">2<=5":270, ">5<=15":96, ">5<=18":0, ">15<=24":18, ">24<=44":45, ">44<=65":45, ">18<=65":0, ">65":99, "Unknown":0 }
      ];
  }  
  if (countryValue == 'Malawi') {
    var data = [
      { category: "Age group", "<=2":681, ">2<=5":256, ">5<=15":122, ">5<=18":0, ">15<=24":57, ">24<=44":154, ">44<=65":32, ">18<=65":0, ">65":2, "Unknown":0 }
      ];
  }  
  if (countryValue == 'Mozambique') {
    var data = [
      { category: "Age group", "<=2":138, ">2<=5":17, ">5<=15":11, ">5<=18":0, ">15<=24":1, ">24<=44":0, ">44<=65":0, ">18<=65":0, ">65":0, "Unknown":0 }
      ];
  }  
  if (countryValue == 'Nepal') {
    var data = [
      { category: "Age group", "<=2":347, ">2<=5":42, ">5<=15":27, ">5<=18":0, ">15<=24":0, ">24<=44":0, ">44<=65":0, ">18<=65":0, ">65":0, "Unknown":0 }
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
      { category: "Age group", "<=2":113, ">2<=5":58, ">5<=15":266, ">5<=18":0, ">15<=24":125, ">24<=44":10, ">44<=65":16, ">18<=65":0, ">65":19, "Unknown":0 }
      ];
  }  
  if (countryValue == 'Poland') {
    var data = [
      { category: "Age group", "<=2":125, ">2<=5":64, ">5<=15":0, ">5<=18":0, ">15<=24":0, ">24<=44":0, ">44<=65":0, ">18<=65":0, ">65":0, "Unknown":0 }
      ];
  }  
  if (countryValue == 'Qatar') {
    var data = [
      { category: "Age group", "<=2":44, ">2<=5":12, ">5<=15":0, ">5<=18":6, ">15<=24":0, ">24<=44":0, ">44<=65":0, ">18<=65":24, ">65":24, "Unknown":7 }
      ];
  }  
  if (countryValue == 'South Africa') {
    var data = [
      { category: "Age group", "<=2":2425, ">2<=5":999, ">5<=15":319, ">5<=18":0, ">15<=24":132, ">24<=44":540, ">44<=65":174, ">18<=65":0, ">65":26, "Unknown":0 }
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
      { category: "Age group", "<=2":710, ">2<=5":353, ">5<=15":25, ">5<=18":0, ">15<=24":15, ">24<=44":106, ">44<=65":189, ">18<=65":0, ">65":186, "Unknown":0 }
      ];
  }  
  
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
      .attr("width", x.bandwidth())
      .append("title")
          .attr("id", "popup")
          .text(function(d) {
            //return d.data.key + " " + ((d[0] - d[1]) * 100) + "%";
            var percent = (d[0]  -  d[1])
            //var res = percent.toPrecision(2).toString(2).replace(/-/i, " ")
            var res = percent.toFixed(2).replace(/-/i, " ")
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