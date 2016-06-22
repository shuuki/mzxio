
// processed version of markdown:
var what = "start---first,choice\nfirst---choice, second\nsecond---third\nchoice---consequence\nconsequence---third"

/*

// you write this in markdown:

start---first,choice
first---choice, second
second---third
choice---consequence
consequence---third


// the parser creates this version: 

{
  "nodes": [
    { "name": "start" },
    { "name": "first" },
    { "name": "choice" },
    { "name": "second" },
    { "name": "third" },
    { "name": "consequence" }
  ],
  "links": [
    { "source": "start", "target": "first" },
    { "source": "start", "target": "choice" },
    { "source": "first", "target": "choice" },
    { "source": "first", "target": "second" },
    { "source": "second", "target": "third" },
    { "source": "choice", "target": "consequence" },
    { "source": "consequence", "target": "third" }
  ]
}

// ready to be fed into d3?

*/



/**
 * DIRECTED MARKDOWN
 */

var dm = {}

dm.parse = function(source) {

  var plan = {
    "nodes": [],
    "links": []
  },
    start = source.toString(),
    lines = start.split("\n"),
    temp = [];

    for (var i = 0; i < lines.length; i ++) {

      var current = lines[i],
        divider = current.indexOf("---"),
        node = current.slice(0, divider),
        connections = current.slice(divider+3, current.length),
        match = /\s*,\s*/,
        connection = connections.split(match);

      if (temp.indexOf(node) < 0 ) temp.push(node)

      for (var k = 0; k < connection.length; k++) {

        plan.links.push({ "source": node, "target": connection[k] });
        if (temp.indexOf(connection[k]) < 0 ) temp.push(connection[k])   

      }
      //console.log(current);
    }

    for (var n = 0; n < temp.length; n++) {
      plan.nodes.push({"name": temp[n]})
    }

  return plan;
}


// test :
// dm.parse(what)
