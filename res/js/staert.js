var visuallyGroup = true;

function getGlyphUrl(aUrl) {
	var faviconSvc = "http://www.google.com/s2/favicons?domain="; //"http://g.etfv.co/http://";
	return faviconSvc + stripProtocol(aUrl);
}

function hasProtocol(aUrl) {
	var index = aUrl.search("://");
	if(index >= 4) { return true; }
	return false;
}

function stripProtocol(aUrl) {
	var index = aUrl.search("://");
	if(index > 0) { return aUrl.substring(index + 3, aUrl.length); }
	return aUrl;
}

function stripWWW(aUrl) {
	var index = aUrl.search("www.");
	if(index > 0) { return aUrl.substring(index + 4, aUrl.length); }
	return aUrl;
}

function stripTrailingSlash(aUrl) {
	return aUrl.replace(/\/$/, "");
}

function cleanUrl(aUrl) {
	aUrl = stripWWW(aUrl);
	aUrl = stripProtocol(aUrl);
	aUrl = stripTrailingSlash(aUrl);
	return aUrl;
}

function staert(favsarray, identifier) {
	var view = "";
	var numFavs = favsarray.length;
	for(var i = 0; i < numFavs; i++) {
		var innerFavs = favsarray[i];
		if(visuallyGroup == true) {
			if(i == 0) {
				view += "<div class=\"panel panel-default\"><div class=\"panel-body first\">";
			} else if(i == (numFavs -1)) {
				view += "<div class=\"panel panel-default\"><div class=\"panel-body last\">";
			} else {
				view += "<div class=\"panel panel-default\"><div class=\"panel-body\">";
			}
		}
		
		for(var j = 0; j < innerFavs.length; j++) {
			var theUrl = innerFavs[j];
			if(! hasProtocol(theUrl)) { theUrl = "http://" + theUrl; }
			view += "<div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-2 list-group\" role=\"group\">";
			view += "<a href=\"" + theUrl + "\" title=\"" + theUrl + "\" target=\"_blank\" rel=\"external\" class=\"list-group-item\" role=\"link\">";
			view += "<img src=\"" + getGlyphUrl(theUrl) + "\" width=\"16\" height=\"16\" role=\"img\">";
			view += "&nbsp;" + cleanUrl( theUrl );
			view += "</a>";
			view += "</div>";
		}
		if(visuallyGroup == true) { view += "</div></div>"; }
		
	}
	document.getElementById(identifier).innerHTML = view;
}