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
