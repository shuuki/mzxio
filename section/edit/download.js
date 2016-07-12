
function save (filename, data) {
	var blob = new Blob([data], {type: 'text/plain'});

	var elem = window.document.createElement('a');
	elem.href = window.URL.createObjectURL(blob);
	elem.download = filename;

	document.body.appendChild(elem);
	elem.click();
	document.body.removeChild(elem);
	
	window.URL.revokeObjectURL(blob);
}

//save("dis.txt", "YOU BETTA BELIEVE IT SUCKAH")


document.getElementById("download").addEventListener("click", function() {

	var title = document.getElementById("title").value || "nameless";
	var text = document.getElementById("text").value;
	save(title+".txt", text)
	
}, false)


//data:application/octet-stream
//escape(data)