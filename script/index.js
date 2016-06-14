/*** 
INIT
*/

"use strict";


/*** 
UTILITIES
*/


// fullHeight calculator
function fullHeight () {
	$(".fullHeight").css("min-height", $(window).height());
};


/***
DOCUMENT READY EVENTS
*/

$(document).ready(function() {

	// @todo stop reusing this code?
	var view = $("body"),
		breakpoint = $(window).height() - $("nav").height();

	if (view.scrollTop() <= breakpoint) {
		$("nav").css("top", breakpoint);
	}


	// check hash value in url against exiting nav links and load if there is a match
	var hash = window.location.hash.substr(1),
		href = $("nav links a").each(function() {
		var container = "#longer",
			destination = $(this).attr("href");
		if (hash == destination.substr(0, destination.length)) {
			$(container).load(hash);
			$(window).scrollTo(container, 250);
		}
	});

	// listen for clicks on nav links to navigate site content
	$("nav links a").click(function() {
		// container variable points to element that will change
		// destination grabs the href of link being clicked on
		var container = "#longer",
			destination = $(this).attr("href");
		// set url hash to the href of active link
		window.location.hash = destination.substr(0, destination.length);
		// hide container and fire the load event
		$(container).fadeOut("normal", loadContent)
		// load new content and fire event to show container
		function loadContent() {
			$(container).load(destination, "", showNewContent())
		}
		// steps to take after loading new container content
		function showNewContent() {
			$(container).fadeIn("normal", function() {
				fullHeight();
				$(window).scrollTo(container, 250);
			});
		}
		// stop links from actually working and interrupting ajax process
		return false;
	});

	// run fullHeight calculations
	fullHeight();

	// initialize recliner lazy loading
	$(".lazy").recliner({
		attrib: "data-src",
		throttle: 250,
		threshold: 100,
		printable: true,
		live: true
	});

});


/***
RESIZE EVENTS
*/

$(window).resize(function() {

	// recalculate fullHeight on resize
	fullHeight();


	// @todo stop reusing this code?
	var view = $("body"),
		breakpoint = $(window).height() - $("nav").height();

	if (view.scrollTop() <= breakpoint) {
		$("nav").css("top", breakpoint);
	}


	// @todo fix swiper centering
});


/***
SCROLL EVENTS
*/

$(window).scroll(function() {

	var view = $("body"),
		breakpoint = $(window).height() - $("nav").height();

	if (view.scrollTop() > breakpoint) {
		$("#intro").css("background", "magenta");
		$("nav").removeClass("absolute").css("top", "0");
	} else {
		$("#intro").css("background", "rgb(232,232,232)");
		$("nav").addClass("absolute").css("top", breakpoint);
	}

})
