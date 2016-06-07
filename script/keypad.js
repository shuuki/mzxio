/***
KEYPAD
*/

function addCode(key) {
	var code = $(".key")[0].code;
  if(code.value.length < 6) {
		code.value = code.value + key;
	}
  if(code.value.length == 6) {
    //document.getElementById("message").style.opacity = "1";
  	//setTimeout(submitForm, 1000);
  }
}

function submitForm() {
	document.forms[0].submit();
}

function emptyCode() {
	document.forms[0].code.value = "";
	document.getElementById("message").style.opacity = "0";
}
