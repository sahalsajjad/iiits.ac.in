$(document).ready(function(){
	function getParameterByName(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}	
	console.log(getParameterByName('dept'));
	console.log(getParameterByName('title'));
	console.log(getParameterByName('ra'));
	console.log(getParameterByName('vs'));
	console.log(getParameterByName('instfac'));	
});