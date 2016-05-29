<?php
switch($_GET['code']){
	case 'FFFFFF': header('Location: key/white.html'); break;
	case '000000': header('Location: key/black.html'); break;
	case 'FF0000': header('Location: key/red.html'); break;
	case '0000FF': header('Location: key/blue.html'); break;
	default: header('Location: index.html'); break;
}
?>