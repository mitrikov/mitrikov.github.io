window.onload = function() {
var	d = document,
	date = new Date();
	d.getElementById("year").innerHTML = date.getFullYear();
	if(d.getElementById("domain")) {
		d.getElementById("domain").innerHTML = window.location.host; 
	}
}