var margin = {top: 20, right: 160, bottom: 35, left: 30};

var width = 130 - margin.left - margin.right,
    height = 396 - margin.top - margin.bottom;

var legendWidth = 250 - margin.left - margin.right,
    legendHeight = 200 - margin.top - margin.bottom;

var svg = d3.select("#bar-two")
  .attr("width", width + margin.left + margin.right)
  .append("svg")
  .attr("width", 150) 
  .attr("height", 300)
  .classed(".secondbar", true);
  //.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  countryValue = d3.select("#exampleModalLabel.modal-title").text();
  if (countryValue == 'Argentina') {
    var data = [
      { category: "Vaccine Period", PrePCV: '0', NouniversalintroductiontoPCV: '0', PostPCV7: '0', introPCV10: '0', PostPCV10: '0', PostPCV13: '0', Unknown: '0'}
    ];
  }
  if (countryValue == 'Bangladesh') {
    var data = [
      { category: "Vaccine Period", PrePCV: '533', NouniversalintroductiontoPCV: '0', PostPCV7: '0', introPCV10: '21', PostPCV10: '1', PostPCV13: '0', Unknown: '2'}
    ];
  }
  if (countryValue == 'Brazil') {
    var data = [
      { category: "Vaccine Period", PrePCV: '206', NouniversalintroductiontoPCV: '0', PostPCV7: '0', introPCV10: '0', PostPCV10: '205', PostPCV13: '0', Unknown: '1'}
    ];
  }
  if (countryValue == 'Papua New Guinea') {
    var data = [
      { category: "Vaccine Period", PrePCV: '155', NouniversalintroductiontoPCV: '0', PostPCV7: '0', introPCV10: '0', PostPCV10: '0', introPCV13: '1', PostPCV13: '5', Unknown: '4'}
    ];
  }
  if (countryValue == 'Peru') {
    var data = [
      { category: "Vaccine Period", PrePCV: '0', NouniversalintroductiontoPCV: '0', introPCV7: '31', prePCV7: '445', PostPCV7: '48', introPCV10: '0', PostPCV10: '0', introPCV10and13: '31', PostPCV13: '0', Unknown: '181'}
    ];
  }
  if (countryValue == 'South Africa') {
    var data = [
      { category: "Vaccine Period", PrePCV: '0', NouniversalintroductiontoPCV: '0', prePCV7: '1237', introPCV7: '679', PostPCV7: '662', introPCV10: '0', PostPCV10: '0', introPCV13: '673', PostPCV13: '1648', Unknown: '2'}
    ];
  }
  if (countryValue == 'USA') {
    var data = [
      { category: "Vaccine Period", PrePCV: '0', NouniversalintroductiontoPCV: '0', introPCV7: '40', prePCV7: '688', PostPCV7: '928', introPCV10: '0', PostPCV10: '0', PostPCV13: '353', Unknown: '2'}
    ];
  }
  /*var data = [
    /*{ category: "Sampling Years", 1998: '75', 1999: '53', 2010: '41', 2011: '95', 2012: '100', 2013: '62' }, 
    { category: "Vaccine Period", PrePCV: '4', NouniversalintroductiontoPCV: '7', PostPCV7: '8', PostPCV10: '13', PostPCV13: '9'}
    ]; */
      
      var svg = d3.select(".secondbar");
      //var g = d3.selectAll("svg.secondbar")
      //.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
      //var secondbar = svg.selectAll(".secondbar"),
        margin = {top: 20, right: 60, bottom: 30, left: 40},
        width = 150 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;
        //width = +svg.attr("width") - margin.left - margin.right,
        //height = +svg.attr("height") - margin.top - margin.bottom,
        g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
      
      var x = d3.scaleBand()
        .rangeRound([0, width])
        .paddingInner(0.1)
        .align(0.2);
      
      var y = d3.scaleLinear()
        .range([height, 0]);
      
      var z = d3.scaleOrdinal()
        .range(["#b33040", "#d25c4d", "#f2b447", "#e9d574", "#c1d574", "#b1c574"]);
      
      /* if (data.category == "Vaccine Period") {
      // Transpose the data into layers
      var dataset = d3.stack()(['PrePCV', 'NouniversalintroductiontoPCV', 'PostPCV7', 'PostPCV10','PostPCV13']
      .map(function(fruit) {
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
      z.domain(['PrePCV', 'NouniversalintroductiontoPCV', 'prePCV7', 'introPCV7', 'PostPCV7', 'introPCV10', 'PostPCV10', 'introPCV10and13', 'introPCV13', 'PostPCV13', 'Unknown']);
      
      var serie = g.selectAll(".serie")
        .data(stack.keys(['PrePCV', 'NouniversalintroductiontoPCV', 'prePCV7', 'introPCV7', 'PostPCV7', 'introPCV10', 'PostPCV10', 'introPCV10and13', 'introPCV13', 'PostPCV13', 'Unknown'])(data))
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
      
      var colors = ["#b33040", "#d25c4d", "#f2b447", "#e9d574", "#c1d574"];
      var svg2 = d3.select("#legend-two");
      
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
                case 0: return 'PrePCV';
                case 1: return 'NouniversalintroductiontoPCV';
                case 2: return 'PostPCV7';
                case 3: return 'PostPCV10';
                case 4: return 'PostPCV13';
              }
            });
          