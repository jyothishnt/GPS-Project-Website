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
      { category: "Age group", "<=2":0, ">2<=5":0, ">5<=15":0, "Unknown":0 }
      ];
  }  
  if (countryValue == 'Bangladesh') {
    var data = [
      { category: "Age group", "<=2":434, ">2<=5":66, ">5<=15":56, "Unknown":1 }
      ];
  } 
  if (countryValue == 'Brazil') {
    var data = [
      { category: "Age group", "<=2":219, ">2<=5":53, ">5<=15":23, ">15<=24":12, ">24<=44":35, ">44<=65":56, ">65":13, "Unknown":1 }
      ];
  }  
  if (countryValue == 'Papua New Guinea') {
    var data = [
      { category: "Age group", "<=2":151, ">2<=5":9, ">5<=15":3, "Unknown":2 }
      ];
  }  
  if (countryValue == 'Peru') {
    var data = [
      { category: "Age group", "<=2":113, ">2<=5":16, ">5<=15":0, ">5<=18":32, ">18<=65":23, ">65":19, "Unknown":533 }
      ];
  }  
  if (countryValue == 'South Africa') {
    var data = [
      { category: "Age group", "<=2":2582, ">2<=5":1060, ">5<=15":0, ">5<=18":327, ">18<=65":23, ">65":19, "Unknown":0 }
      ];
  }  
  if (countryValue == 'USA') {
    var data = [
      { category: "Age group", "<=2":984, ">2<=5":410, ">5<=15":0, ">5<=18":30, ">18<=65":861, ">65":26, "Unknown":0 }
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
    .range(["#d25c4d", "#f2b447", "#e9d574", "#c1d574", "#b1c574", "#e7d1bc"]);
  
  /*if (data.category == "Sampling Years") {
  // Transpose the data into layers
  var dataset = d3.stack()(["1998", "1999", "2010", "2011", "2012", "2013"].map(function(fruit) {
  return data.map(function(d) {
    return {x: (d.category), y: +d[fruit]};
  });
  }));
  }
  if (data.category == "Age group") {
    var dataset = d3.stack(['<=2', '>2<=5'].map(function(fruit) {
        return data.map(function(d) {
          return {x: (d.category), y: +d[fruit], z: (d.label)};
        });
      }));
  } */
  var stack = d3.stack()
    .order(d3.stackOrderNone)
    .offset(d3.stackOffsetExpand);  
  
  //data.forEach(function(d){d.satisfied=d.totalHours-d.leftHours});
  //data.sort(function(a, b) { return b.totalHours-a.totalHours; });
  
  x.domain(data.map(function(d) { return d.category; }));
  z.domain(["<=2", ">2<=5", ">5<=18", ">18<=65", ">65", "Unknown"]);
  
  var serie = g.selectAll(".serie")
    .data(stack.keys(["<=2", ">2<=5", ">5<=18", ">5<=15", ">18<=65", ">15<=24", ">24<=44", ">44<=65", ">65", "Unknown"])(data))
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
  
  var colors = ["#d25c4d", "#f2b447", "#e9d574", "#c1d574", "#b1c574", "#e7d1bc"];
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
            case 1: return "#b1c574";
            case 2: return "#c1d574";
            case 3: return "#e9d574";
            case 4: return "#f2b447";
            case 5: return "#d25c4d";
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
            case 0: return 'Unknown';
            case 1: return '>65';
            case 2: return '>18<=65';
            case 3: return '>5<=18';
            case 4: return '>2<=5';
            case 5: return '<2'
          }
        });