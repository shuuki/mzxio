/*** INIT */

"use strict";



/***
KEYPAD */




function addCode(key) {
	var code = $(".key")[0].code;
  if(code.value.length < 6) {
		code.value = code.value + key;
	}
  if(code.value.length == 6) {
    //document.getElementById("message").style.opacity = "1";
  	//setTimeout(submitForm, 1000);
  }
}

function submitForm() {
	document.forms[0].submit();
}

function emptyCode() {
	document.forms[0].code.value = "";
	document.getElementById("message").style.opacity = "0";
}



/*
function draw() {
    requestAnimationFrame(draw);
    // Drawing code goes here
}
draw();
*/


//$('p').hyphenate('en-gb');

(function($) {





/*
STICKY NAVIGATION
*/

if (! $("#intro").hasClass("stickyNav")) {
	$("nav").addClass("fixed");
}

$(window).scroll(function() {
	var view = $("body"),
		breakpoint = $(window).height() - $("nav").height();

	if (! $("#intro").hasClass("stickyNav")) {
		$("nav").addClass("fixed");
	} else if (view.scrollTop() > breakpoint && $("#intro").hasClass("stickyNav")) {
		$("#intro").css("background", "magenta");
		$("nav").addClass("fixed");
	} else {
		$("#intro").css("background", "rgb(232,232,232)");
		$("nav").removeClass("fixed");
	}

});


/***
FULL HEIGHT SECTIONS
*/

// should make this something you can enable if desired

// set sections to window height
$(".fullHeight").css("min-height", $(window).height()).css("margin", "0 auto");

// update section height on resize
$(window).resize(function() {
	$(".fullHeight").css("min-height", $(window).height());
	// @TODO fix swiper centering
});



/*
PACKERY
*/

/*
// init Packery
var $grid = $('.gallery').packery({
	itemSelector: '.piece',
  gutter: 0
});

// lay out Packery after each image loads
$grid.imagesLoaded().progress(
	function() {
	  $grid.packery();
	}
);

*/


/*
STYLESHEET SWITCHER

* put class ".theme" on the stylesheets you want to cycle through
* add an element with id "#contrast" in markup to let you switch styles
* mark all stylesheets in the sequence except the first as "disabled"

Inspired by Kelvin Luck's jQuery Stylesheet Switcher:
http://2008.kelvinluck.com/assets/jquery/styleswitch/toggle.html
*/

/*

// load up the current stylesheets
var styles = $("link[class*='theme']"),
	styleOn = 0;

// main functions
$.styleSwitch = function() {
	// disable the current style
	styles[styleOn].disabled = true;

	// advance the counter
	styleOn ++;
	if(styleOn >= styles.length) {
		styleOn = 0;
	}

	// enable the next style
	if(styles[styleOn].disabled == true) {
		styles[styleOn].disabled = false
	}
};


// switching actor, listening in for a click on the "#contrast" element
$("#contrast").bind("click", function(e) {
$.styleSwitch();
});

*/


/*** SELF ANNIHILATION */

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




})(jQuery);
