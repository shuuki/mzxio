// takes numbers in  either dec or oix format
// returns conversion to other type

function oix(count) {

	var count = count,
		converted = "error";

	// @todo refine this by using Number() to check strings
	
	if (typeof count === "number") {
		converted = count.toString(5).split("");
		for (var i = 0; i < converted.length; i++) {
			converted.splice(i, 1, transcribe(converted[i]));
		}
		return converted.join("");
	} else {
		converted = count.toUpperCase().split("");
		for (var i = 0; i < converted.length; i++) {
			converted.splice(i, 1, deconstruct(converted[i]));
		}
		return parseInt(converted.join(""), 5);
	}

	function transcribe(sum) {
		if (sum === "0") return "O";
		else if (sum === "1") return "I";
		else if (sum === "2") return "X";
		else if (sum === "3") return "Z";
		else if (sum === "4") return "M";
		else return ".";
	}

	function deconstruct(sum) {
		if (sum === "O") return "0";
		else if (sum === "I") return "1";
		else if (sum === "X") return "2";
		else if (sum === "Z") return "3";
		else if (sum === "M") return "4";
		else return ".";
	}

	return converted;
}
