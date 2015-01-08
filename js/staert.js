function getGlyphUrl(aUrl) {
	// TODO - Cache icons? How about a custom, default icon?
	// Look into HTML Canvas, ImageData property.
	// 
	var faviconSvc = "http://www.google.com/s2/favicons?domain=";
	//var faviconSvc = "http://g.etfv.co/http://";
	return faviconSvc + stripProtocol(aUrl);
}

function hasProtocol(aUrl) {
	var index = aUrl.search("://");
	if(index >= 4) {
		return true;
	}
	return false;
}

function stripProtocol(aUrl) {
	var index = aUrl.search("://");
	if(index > 0) {
		return aUrl.substring(index + 3, aUrl.length);
	}
	return aUrl;
	
}

function stripWWW(aUrl) {
	var index = aUrl.search("www.");
	if(index > 0) {
		return aUrl.substring(index + 4, aUrl.length);
	}
	return aUrl;
}

function staert(favsarray, identifier) {
	var view = "";
	var numFavs = favsarray.length;
	for (var i = 0; i < numFavs; i++) {
		var theUrl = favsarray[i];
		if(! hasProtocol(theUrl)) {
			theUrl = "http://" + theUrl;
		}
		view += "<div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3 list-group\" role=\"group\">";
		view += "<a href=\"" + theUrl + "\" title=\"" + theUrl + "\" target=\"_blank\" rel=\"external\" class=\"list-group-item\" role=\"link\">";
		view += "<img src=\"" + getGlyphUrl(theUrl) + "\" width=\"16\" height=\"16\" role=\"img\">";
		view += "&nbsp;" + stripProtocol( stripWWW( theUrl ) );
		view += "</a>";
		view += "</div>";
	}
	document.getElementById(identifier).innerHTML = view;
}