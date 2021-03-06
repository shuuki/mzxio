// make data

function sequence(steps, complete) {
  var days = [];
  for (var step = 0; step < steps; step++) {
    if (step < complete) {
      days.push({
        "day": step,
        "done": false
      });
    } else {
      days.push({
        "day": step,
        "done": true
      });
    }
  }
  return days;
}


// roll the data

var data  = sequence(216, document.querySelectorAll("#progress")[0].children.length||1);


// d3

var width = 280,
  height = 280,
  radius = Math.min(width, height) / 2;

var color = d3.scale.ordinal()
  .range(["white", "black"]);//(["rgb(42,42,42)","rgb(232,232,232)"]);

var arc = d3.svg.arc()
  .outerRadius(radius)
  .innerRadius(radius - 20);

var pie = d3.layout.pie()
  .sort(null)
  .padAngle(0.0075)
  .value(function(d) { return 1; }); //for added fun, can also return d.day, d.done, etc

var svg = d3.select("#chart").append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(" + width/2 + "," + height/2 + ")");

var g = svg.selectAll(".arc")
  .data(pie(data))
  .enter().append("g")
  .attr("class", "arc");

g.append("path")
  .attr("d", arc)
  .style("fill", function(d) { return color(d.data.done); })
  .style("stroke","none");

/*
g.append("text")
  .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
  .attr("dy", "0.35em")
  .text(function(d) { return d.data.title; });
*/

function type(d) {
  d.day = +d.day;
  return d;
}
