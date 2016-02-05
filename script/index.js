//"use strict";


/*
STICKY NAVIGATION
*/

/*
$(window).scroll(function() {
	var view = $("body");
	var breakpoint = $(window).height() - 40; // height of #top

	if (view.scrollTop() > breakpoint) {
		//$("#intro").css("background", "magenta");
		$("nav").addClass("fixed");
	} else {
		//$("#intro").css("background", "rgb(232,232,232)");
		$("nav").removeClass("fixed");
	}
});
*/

/*
STYLESHEET SWITCHER

* put class ".theme" on the stylesheets you want to cycle through
* add an element with id "#contrast" in markup to let you switch styles

Inspired by Kelvin Luck's jQuery Stylesheet Switcher:
http://2008.kelvinluck.com/assets/jquery/styleswitch/toggle.html
*/

(function($) {

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

})(jQuery);

// switching actor, listening in for a click on the "#contrast" element
$("#contrast").bind("click", function(e) {
	$.styleSwitch();
});


