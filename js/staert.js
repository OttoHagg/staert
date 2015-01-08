function getGlyphUrl(aUrl) {
	// TODO - Cache icons? How about a custom, default icon?
	// Look into HTML Canvas, ImageData property.
	// 
	var faviconSvc = "http://www.google.com/s2/favicons?domain=";
	//var faviconSvc = "http://g.etfv.co/http://";
	return faviconSvc + aUrl;
}

function staert(favsarray, identifier) {
	var view = "";
	var numFavs = favsarray.length;
	for (var i = 0; i < numFavs; i++) {
		var theUrl = favsarray[i];
		view += "<div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3 list-group\" role=\"group\">";
		view += "<a href=\"http://" + theUrl + "\" title=\"" + theUrl + "\" target=\"_blank\" rel=\"external\" class=\"list-group-item\" role=\"link\">";
		view += "<img src=\"" + getGlyphUrl(theUrl) + "\" width=\"16\" height=\"16\" role=\"img\">";
		view += "&nbsp;" + theUrl;
		view += "</a>";
		view += "</div>";
	}
	document.getElementById(identifier).innerHTML = view;
}