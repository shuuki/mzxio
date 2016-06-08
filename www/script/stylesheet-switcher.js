/***
STYLESHEET SWITCHER

* put class ".theme" on the stylesheets you want to cycle through
* add an element with id "#contrast" in markup to let you switch styles
* mark all stylesheets in the sequence except the first as "disabled"

Inspired by Kelvin Luck's jQuery Stylesheet Switcher:
http://2008.kelvinluck.com/assets/jquery/styleswitch/toggle.html
*/

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
