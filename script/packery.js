/***
PACKERY
*/

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
