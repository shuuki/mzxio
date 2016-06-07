/*
INIT
*/

"use strict";

(function($) {
	// fire module when jquery loads
})(jQuery);
$("nav links a").click(function() {
	var destination = $(this).attr("href");
	$("#longer").load(destination);
	window.location.hash = destination.substr(0, destination.length)
	return false;
});
