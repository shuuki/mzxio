/***
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
