//"use strict";

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
// Call stylesheet init so that all stylesheet changing functions 
// will work.
$.stylesheetInit();

// This code loops through the stylesheets when you click the link with 
// an ID of "toggler" below.
$("#contrast").bind(
	"click",
	function(e) {
		$.stylesheetToggle();
		return false;
	}
);
*/


//I would suggest you give the link-tag an id such as theme.
//Put the name of the css file in a data-attribute on the buttons
//and use the same handler on them both:

//Html:

//<button id="grayscale" data-theme="style2.css">Gray Theme</button>





//And js:

//$("button[data-theme]").click(function() {
//    $("head link#theme").attr("href", $(this).data("theme"));
//}


// old init
//$("link[class*='theme']").each(function(i) {
//	styles.push(this.getAttribute("href"));
//});

// init
var styles = $("link[class*='theme']"),
	styleOn = 0;

// functions
$.styleSwitch = function() {
	// disable the last one
	styles[styleOn].disabled = true;

	// advance the counter
	styleOn ++;
	if(styleOn >= styles.length) {
		styleOn = 0;
	}

	//$.styleNext(styles[styleOn]);

	if(styles[styleOn].disabled == true) {
		styles[styleOn].disabled = false
	}
};

$.styleNext = function(parame) {
	// enable the next one
	//console.log("yup!" + styleOn)
	if(parame.disabled == true) {
		parame.disabled = false
	}
};



// action
$("#contrast").bind("click", function(e) {
	$.styleSwitch();
});




/*
(function($) {

})(jQuery);
*/