

var drawGraph = function(graph) {
  
  
  var width = document.documentElement.clientWidth,
    height = document.documentElement.clientHeight/2;

  var color = d3.scale.category20();

  var force = d3.layout.force()
      .linkDistance(60)
      .charge(-300)
      .size([width, height]);

  var svg = d3.select("body").append("svg")
      .attr("width", width)
      .attr("height", height);
  
  force
      .nodes(graph.nodes)
      .links(graph.links)
      .start();

      svg.append("defs").selectAll("marker")
          .data(["end"])
        .enter().append("marker")
          .attr("id", String)
          .attr("viewBox", "0 -5 10 10")
          .attr("refX", 15)
          .attr("refY", 0)
          .attr("markerWidth", 6)
          .attr("markerHeight", 6)
          .attr("orient", "auto")
        .append("path")
          .attr("d", "M 0 -4 L 8 0 L0 4  Z")
          .style("stroke", "#999")
          .style("fill", "#999")
          .style("opacity", "1");


  var link = svg.selectAll(".link")
      .data(graph.links)
    .enter().append("line")
      .attr("class", "link")
      .style("stroke-width", function(d) { return Math.sqrt(d.value); })
      .style("marker-end",  "url(#end)") // Modified line;


  var gnodes = svg.selectAll('g.gnode')
     .data(graph.nodes)
     .enter()
     .append('g')
     .classed('gnode', true);
    
  var node = gnodes.append("circle")
      .attr("class", "node")
      .attr("r", 9)
      .call(force.drag);

  var labels = gnodes.append("text")
      .text(function(d) { return d.name; })
      .attr("font-family", "inherit")
      .attr("font-size", "0.5em")
      .attr("fill", "white")
      .attr("dy", "0.35em")
      .attr("dx", "2em");

  //console.log(labels);
    
  force.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    gnodes.attr("transform", function(d) { 
        return 'translate(' + [d.x, d.y] + ')'; 
    });
      
    
      
  });
};

//drawGraph(graph);
