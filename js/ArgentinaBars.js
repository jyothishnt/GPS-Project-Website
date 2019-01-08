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
    { category: "Sampling Years", 1998: '75', 1999: '53', 2008: '0', 2009: '0', 2010: '41', 2011: '95', 2012: '100', 2013: '62' }
    ];
}
if (countryValue == 'Bangladesh') {
  var data = [
    { category: "Sampling Years", 1998: '15', 1999: '33', 2008: '0', 2009: '0', 2010: '11', 2011: '25', 2012: '40', 2013: '92' }
    ];
}
if (countryValue == 'Brazil') {
  var data = [
    { category: "Sampling Years", 1998: '0', 1999: '0', 2008: '119', 2009: '87', 2010: '0', 2011: '0', 2012: '102', 2013: '103' }
    ];
}
//return data;
//console.log("data country from title: " + countryValue)
//var data = [
  //{ category: "Sampling Years", 1998: '75', 1999: '53', 2010: '41', 2011: '95', 2012: '100', 2013: '62' }
  //];
    
    //var svg = d3.select("svg");
    //var firstbar = svg.selectAll(".firstbar"),
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
      .range(["#b33040", "#d25c4d", "#f2b447", "#e9d574", "#c1d574", "#b1c574", "#D6CF97", "#e7d1bc"]);
    
    //if (data.category == "Sampling Years") {
   // if (countryValue == 'Brazil') {
    // Transpose the data into layers
    /*var dataset = d3.stack()(["2008", "2009", "2010", "2011", "2012", "2013"].map(function(fruit) {
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
    z.domain(["1998", "1999", "2008", "2009", "2010", "2011", "2012", "2013"]);
    
    var serie = g.selectAll(".serie")
      .data(stack.keys(["1998", "1999", "2008", "2009", "2010", "2011", "2012", "2013"])(data))
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
    //console.log("Value: " + d[1])
    
     g.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
    
    g.append("g")
        .attr("class", "axis axis--y")
        .call(d3.axisLeft(y).ticks(10, "%"));
    
    var colors = ["#b33040", "#d25c4d", "#f2b447", "#e9d574", "#c1d574", "#b1c574"];
    
    var svg2 = d3.select("#legend-one");
    
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
              case 0: return "#b33040";
              case 1: return "#d25c4d";
              case 2: return "#f2b447";
              case 3: return "#e9d574";
              case 4: return "#c1d574";
              case 5: return "#b1c574";
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
              case 0: return "2013";
              case 1: return "2012";
              case 2: return "2011";
              case 3: return "2010";
              case 4: return "1999";
              case 5: return "1998"
            }
          }); 

// Prep the tooltip bits, initial display is hidden
var tooltip = svg.append("g")
  .attr("class", "tooltip")
  .style("display", "none");
    
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
