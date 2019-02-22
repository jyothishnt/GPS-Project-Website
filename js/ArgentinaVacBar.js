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
      { category: "Vaccine Period", PrePCV: '0', NouniversalintroductiontoPCV: '0', PostPCV7: '0', introPCV10: '0', PostPCV10: '0', prePCV13: '0', PostPCV13: '0', Unknown: '0'}
    ];
  }
  if (countryValue == 'Bangladesh') {
    var data = [
      { category: "Vaccine Period", PrePCV: '533', NouniversalintroductiontoPCV: '0', PostPCV7: '0', introPCV10: '21', PostPCV10: '1', prePCV13: '0', PostPCV13: '0', Unknown: '2'}
    ];
  }
  if (countryValue == 'Belarus') {
    var data = [
      { category: "Vaccine Period", PrePCV: '0', NouniversalintroductiontoPCV: '98', PostPCV7: '0', introPCV10: '0', PostPCV10: '0', prePCV13: '0', PostPCV13: '0', Unknown: '0'}
    ];
  }
  if (countryValue == 'Brazil') {
    var data = [
      { category: "Vaccine Period", PrePCV: '206', NouniversalintroductiontoPCV: '0', introPCV7: '0', prePCV7: '0', PostPCV7: '0', introPCV10: '0', PostPCV10: '205', prePCV13: '0', PostPCV13: '0', Unknown: '1'}
    ];
  }
  if (countryValue == 'Cambodia') {
    var data = [
      { category: "Vaccine Period", PrePCV: '289', NouniversalintroductiontoPCV: '0', introPCV7: '0', prePCV7: '0', PCV7: '0', PostPCV7: '0', introPCV10: '0', PostPCV10: '0', introPCV10and13: '0', prePCV13: '0', introPCV13: '103', PCV13: '0', PostPCV13: '521', Unknown: '0'}
    ];
  }
  if (countryValue == 'Ethiopia') {
    var data = [
      { category: "Vaccine Period", PrePCV: '0', NouniversalintroductiontoPCV: '0', introPCV7: '0', prePCV7: '0', PostPCV7: '0', introPCV10: '0', PostPCV10: '0', introPCV10and13: '0', introPCV13: '0', prePCV13: '0', PostPCV13: '0', Unknown: '100'}
    ];
  }
  if (countryValue == 'The Gambia') {
    var data = [
      { category: "Vaccine Period", PrePCV: '1253', NouniversalintroductiontoPCV: '0', introPCV7: '0', prePCV7: '0', PCV7: '0', PostPCV7: '238', introPCV10: '0', PostPCV10: '0', introPCV10and13: '0', prePCV13: '0', introPCV13: '0', PCV13: '0', PostPCV13: '156', Unknown: '0'}
    ];
  }
  if (countryValue == 'Hong Kong') {
    var data = [
      { category: "Vaccine Period", PrePCV: '0', NouniversalintroductiontoPCV: '0', introPCV7: '67', prePCV7: '309', PCV7: '0', PostPCV7: '0', introPCV10: '20', PostPCV10: '78', introPCV10and13: '0', prePCV13: '0', introPCV13: '27', PCV13: '0', PostPCV13: '177', Unknown: '8'}
    ];
  }
  if (countryValue == 'India') {
    var data = [
      { category: "Vaccine Period", PrePCV: '385', NouniversalintroductiontoPCV: '0', introPCV7: '0', prePCV7: '0', PostPCV7: '0', introPCV10: '0', PostPCV10: '0', prePCV13: '0', PostPCV13: '0', Unknown: '0'}
    ];
  }
  if (countryValue == 'Israel') {
    var data = [
      { category: "Vaccine Period", PrePCV: '588', NouniversalintroductiontoPCV: '0', introPCV7: '0', prePCV7: '0', PostPCV7: '112', introPCV10: '0', PostPCV10: '0', prePCV13: '0', PostPCV13: '443', Unknown: '0'}
    ];
  }
  if (countryValue == 'Malawi') {
    var data = [
      { category: "Vaccine Period", PrePCV: '785', NouniversalintroductiontoPCV: '0', introPCV7: '0', prePCV7: '0', PCV7: '0', PostPCV7: '0', introPCV10: '0', PostPCV10: '0', introPCV10and13: '0', prePCV13: '0', introPCV13: '0', PCV13: '0', PostPCV13: '519', Unknown: '0'}
    ];
  }
  if (countryValue == 'Mozambique') {
    var data = [
      { category: "Vaccine Period", PrePCV: '0', NouniversalintroductiontoPCV: '0', introPCV7: '0', prePCV7: '0', PostPCV7: '0', prePCV10: '364', introPCV10: '0', PostPCV10: '0', prePCV13: '0', PostPCV13: '0', Unknown: '3'}
    ];
  }
  if (countryValue == 'Nepal') {
    var data = [
      { category: "Vaccine Period", PrePCV: '0', NouniversalintroductiontoPCV: '0', introPCV7: '0', prePCV7: '1', PostPCV7: '0', prePCV10: '475', introPCV10: '0', PostPCV10: '0', prePCV13: '0', PostPCV13: '0', Unknown: '0'}
    ];
  }
  if (countryValue == 'Nigeria') {
    var data = [
      { category: "Vaccine Period", PrePCV: '2', NouniversalintroductiontoPCV: '0', introPCV7: '0', prePCV7: '0', PCV7: '0', PostPCV7: '0', prePCV10: '0', introPCV10: '17', PostPCV10: '48', prePCV13: '0', PostPCV13: '0', Unknown: '0'}
    ];
  }
  if (countryValue == 'Pakistan') {
    var data = [
      { category: "Vaccine Period", PrePCV: '5', NouniversalintroductiontoPCV: '0', introPCV7: '0', prePCV7: '0', PCV7: '0', PostPCV7: '0', introPCV10: '1', PostPCV10: '64', introPCV10and13: '0', prePCV13: '0', introPCV13: '0', PCV13: '0', PostPCV13: '0', Unknown: '32'}
    ];
  }
  if (countryValue == 'Papua New Guinea') {
    var data = [
      { category: "Vaccine Period", PrePCV: '155', NouniversalintroductiontoPCV: '0', introPCV7: '0', prePCV7: '0', PCV7: '0', PostPCV7: '0', introPCV10: '0', PostPCV10: '0', introPCV10and13: '31', prePCV13: '0', introPCV13: '1', PCV13: '0', PostPCV13: '5', Unknown: '4'}
    ];
  }
  if (countryValue == 'Peru') {
    var data = [
      { category: "Vaccine Period", PrePCV: '0', NouniversalintroductiontoPCV: '0', introPCV7: '31', prePCV7: '445', PCV7: '0', PostPCV7: '48', introPCV10: '0', PostPCV10: '0', introPCV10and13: '31', prePCV13: '0', introPCV13: '0', PCV13: '0', PostPCV13: '0', Unknown: '181'}
    ];
  }
  if (countryValue == 'Poland') {
    var data = [
      { category: "Vaccine Period", PrePCV: '0', NouniversalintroductiontoPCV: '0', introPCV7: '8', prePCV7: '46', PCV7: '0', PostPCV7: '57', introPCV10: '29', PostPCV10: '30', introPCV10and13: '0', prePCV13: '0', introPCV13: '33', PCV13: '0', PostPCV13: '67', Unknown: '0'}
    ];
  }
  if (countryValue == 'Qatar') {
    var data = [
      { category: "Vaccine Period", PrePCV: '0', NouniversalintroductiontoPCV: '0', introPCV7: '0', prePCV7: '1', PCV7: '0', PostPCV7: '116', introPCV10: '0', PostPCV10: '0', introPCV10and13: '0', prePCV13: '0', introPCV13: '0', PCV13: '0', PostPCV13: '0', Unknown: '0'}
    ];
  }
  if (countryValue == 'South Africa') {
    var data = [
      { category: "Vaccine Period", PrePCV: '1825', NouniversalintroductiontoPCV: '0', introPCV7: '0', prePCV7: '0', PCV7: '0', PostPCV7: '1269', introPCV10: '0', PostPCV10: '0', introPCV10and13: '0', prePCV13: '0', introPCV13: '0', PostPCV13: '1521', Unknown: '0'}
    ];
  }
  if (countryValue == 'Thailand') {
    var data = [
      { category: "Vaccine Period", PrePCV: '0', NouniversalintroductiontoPCV: '0', introPCV7: '0', prePCV7: '0', PCV7: '0', PostPCV7: '0', introPCV10: '0', PostPCV10: '0', introPCV10and13: '0', prePCV13: '0', introPCV13: '0', PCV13: '0', PostPCV13: '0', Unknown: '248'}
    ];
  }
  if (countryValue == 'Togo') {
    var data = [
      { category: "Vaccine Period", PrePCV: '0', NouniversalintroductiontoPCV: '0', introPCV7: '0', prePCV7: '0', PCV7: '0', PostPCV7: '0', introPCV10: '0', PostPCV10: '0', introPCV10and13: '0', prePCV13: '123', introPCV13: '2', PCV13: '0', PostPCV13: '0', Unknown: '1'}
    ];
  }
  if (countryValue == 'USA') {
    var data = [
      { category: "Vaccine Period", PrePCV: '459', NouniversalintroductiontoPCV: '0', introPCV7: '0', prePCV7: '0', PCV7: '0', PostPCV7: '779', introPCV10: '0', PostPCV10: '0', introPCV10and13: '0', prePCV13: '0', introPCV13: '0', PCV13: '0', PostPCV13: '346', Unknown: '0'}
    ];
  }
      
      var svg = d3.select(".secondbar");
      
        margin = {top: 20, right: 60, bottom: 30, left: 40},
        width = 150 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;
        
        g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
      
      var x = d3.scaleBand()
        .rangeRound([0, width])
        .paddingInner(0.1)
        .align(0.2);
      
      var y = d3.scaleLinear()
        .range([height, 0]);
      
      var z = d3.scaleOrdinal()
        .range(['#cf9a82', "#b3654c", "#800000", "#b33040", "#d25c4d", "#f16000", '#f3842a', "#f2b447", "#e9d574", "#aecbc9", "#697F98", '#645cc1', '#432fea', "#949aa4", "#e7d1bc"]);

      var stack = d3.stack()
        .order(d3.stackOrderNone)
        .offset(d3.stackOffsetExpand);  
      
      x.domain(data.map(function(d) { return d.category; }));
      z.domain(['PrePCV', 'NouniversalintroductiontoPCV', 'prePCV7', 'introPCV7', 'PCV7', 'PostPCV7', 'prePCV10', 'introPCV10', 'PostPCV10', 'introPCV10and13', 'prePCV13', 'introPCV13', 'PCV13', 'PostPCV13', 'Unknown']);
      
      var serie = g.selectAll(".serie")
        .data(stack.keys(['PrePCV', 'NouniversalintroductiontoPCV', 'prePCV7', 'introPCV7', 'PCV7', 'PostPCV7', 'prePCV10', 'introPCV10', 'PostPCV10', 'introPCV10and13', 'prePCV13', 'introPCV13', 'PCV13', 'PostPCV13', 'Unknown'])(data))
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
      
      var colors = ['#cf9a82', "#b3654c", "#800000", "#b33040", "#d25c4d", "#f16000", '#f3842a', "#f2b447", "#e9d574", "#aecbc9", "#697F98", '#645cc1', '#432fea', "#949aa4", "#e7d1bc",];
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
                case 0: return "#e7d1bc";
                case 1: return '#cf9a82';
                case 2: return "#b3654c";
                case 3: return "#800000";
                case 4: return "#b33040";
                case 5: return "#d25c4d";
                case 6: return "#f16000";
                case 7: return '#f3842a';
                case 8: return "#f2b447";
                case 9: return "#e9d574";
                case 10: return "#aecbc9";
                case 11: return "#697F98";
                case 12: return '#645cc1';
                case 13: return '#432fea';
                case 14: return '#bdb5b0';
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
                case 1: return 'PrePCV';
                case 2: return 'NouniversalintroductiontoPCV';
                case 3: return 'prePCV7';
                case 4: return 'introPCV7';
                case 5: return 'PCV7';
                case 6: return 'PostPCV7'
                case 7: return 'prePCV10'
                case 8: return 'introPCV10';
                case 9: return 'PostPCV10';
                case 10: return 'introPCV10and13';
                case 11: return 'prePCV13';
                case 12: return 'introPCV13';
                case 13: return 'PCV13'
                case 14: return 'PostPCV13';
              }
            });
          