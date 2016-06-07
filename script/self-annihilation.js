/***
SELF ANNIHILATION
*/

//document.getElementsByTagName("p"),

var words = $(".annihilation"),
	chars = [" ", "!", "?", ".", "-", "/", ":",";", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function thing() {
	for (var i = 0; i < words.length; i ++) {
		var buffer = [],
			entropy = words[i].innerHTML[Math.floor(Math.random() * words[i].innerHTML.length)]
		for (var k = 0; k < words[i].innerHTML.length; k++) {
			if (Math.floor(Math.random() * 10000) == 1) {
				buffer.push(entropy);
			} else if (Math.floor(Math.random() * 500000) == 1) {
				buffer.push(shuffle(chars));
			} else if (Math.floor(Math.random() * 500000) == 1) {
				//delete
			} else {
				buffer.push(words[i].innerHTML[k]);
			}
		}
		words[i].innerHTML = buffer.join("");
	}
}

function shuffle(list) {
	return list[Math.floor(Math.random() * list.length)];
};

/*** SIMULATION */
var simulation,
	simRunning = false,
	simTurns = 0,
	sim = function(actions, interval) {
	if (simRunning === false) {
		simulation = setInterval(function() {
			simRunning = true;
			simTurns++;
			actions();
		}, interval);
	} else {
		return;
	}
};
sim.stop = function() {
	clearInterval(simulation);
	simRunning = false;
};

// fire off the SIM
sim(function() {
	thing();
}, 250);


/*
function draw() {
	requestAnimationFrame(draw);
	// Drawing code goes here
}
draw();
*/
