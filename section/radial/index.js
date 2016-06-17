
// make data

function sequence(steps) {
	var days = [];
	for (var step = 0; step < steps; step++) {
		days.push({
			"day": step,
			"done": false,
			"title": "untitled"});
	}
	return days;
}

var data  = sequence(216);
data[0].done = true;
data[1].done = true;
data[2].done = true;
data[3].done = true;
data[4].done = true;
data[5].done = true;




// d3

var width = 320,
	height = 320,
	radius = Math.min(width, height) / 2;

var color = d3.scale.ordinal()
	.range(["rgb(232,232,232)","rgb(42,42,42)"]);

var arc = d3.svg.arc()
	.outerRadius(radius)
	.innerRadius(radius - 30);

var pie = d3.layout.pie()
	.sort(null)
	.padAngle(0.0075)
	.value(function(d) { return 1; }); //for added fun, can also return d.day, d.done, etc

var svg = d3.select("#content").append("svg")
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
