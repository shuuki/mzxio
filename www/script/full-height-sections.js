/***
FULL HEIGHT SECTIONS
*/

// sets elements with fullHeight class to window height
function fullHeight () {
	$(".fullHeight").css("min-height", $(window).height());
};

// set fullHeight size on document ready
$(document).ready(function() {
	fullHeight();
});

// update height on resize
$(window).resize(function() {
	fullHeight();
});
