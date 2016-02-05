
/*
Based on jQuery Stylesheet Switcher by Kelvin Luck kelvinluck.com (CC-BY-SA)
*/

(function($) {

	var availableStylesheets = [];
	var activeStylesheetIndex = 0;

	$.stylesheetToggle = function() {
		activeStylesheetIndex ++;
		//activeStylesheetIndex %= availableStylesheets.length;
		$.stylesheetSwitch(availableStylesheets[activeStylesheetIndex]);
	};

	$.stylesheetSwitch = function(styleName) {
		$("link[class*='theme']").each(
			function(i) {
				//this.disabled = true;
				if (this.getAttribute("href") == styleName) {
					this.disabled = false;
					activeStylesheetIndex = i;
				}
			}
		);
	};

	$.stylesheetInit = function() {
		$("link[class*='theme']").each(
			function(i) {
				availableStylesheets.push(this.getAttribute("href"));
			}
		);
	};

})(jQuery);