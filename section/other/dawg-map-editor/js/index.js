// ui elements
var map = document.getElementById('map')
var scratchpad = document.getElementById('scratchpad')

// map grid size
var edge = 10

// map arrays
var base = [],
		edited = [],
		saved = []

// build new map
function newMap() {
	for (var x = 1; x <= edge*edge; x++ ) {
		base.push('<td><input type="text" maxlength="1" name="tile" placeholder="b" onclick="this.select();" value="."></td>')
	}
	var land = listToMatrix(base, edge)
	for (var y = 0; y < land.length; y++ ) {
		map.innerHTML += '<tr>'+ land[y].join('') + '</tr>'
	}
}

// save current map
function saveMap(form) {
	for (x = 0; x < document.doggie.tile.length; x++) {
		edited.push(document.doggie.tile[x].value)
	}
	var saved = listToMatrix(edited, edge)
	scratchpad.value+= 'map : {\r'
	for (var i = 0; i < saved.length; i++ ) {
		scratchpad.value += '  [' + saved[i].join(',') + '],\r'
	}
	scratchpad.value+= '}\r'
}

// clear map builder

function clearForm() {
	scratchpad.value = ''
	saved = []
	edited = []
}

// 1d list to 2d matrix utility
function listToMatrix(list, bound) {
	var matrix = [], x, y
	for (x = 0, y = -1; x < list.length; x++) {
		if (x % bound === 0) {
			y++
			matrix[y] = []
		}
		matrix[y].push(list[x])
	}
	return matrix
}