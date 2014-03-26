function staert(favsarray, identifier) {
	var faviconSvc = "http://www.google.com/s2/favicons?domain="; // Or, http://g.etfv.co/http://
	var view = "";
	for (var i = 0; i < favsarray.length; i++) {
		view += "<ul class=\"favitem\">"
		for (var u = 0; u < favsarray[i].length; u++) {
			var theUrl = favsarray[i][u];
			view += "<li>";
			view += "<a href=\"http://" + theUrl + "\" title=\"" + theUrl + "\" target=\"_blank\" rel=\"external\">";
			view += "<img src=\"" + faviconSvc + theUrl + "\" alt=\"" + theUrl + "\" width=\"16\" height=\"16\">";
			view += "&nbsp;" + theUrl;
			view += "</a>";
			view += "</li>";
		};
		view += "</ul>"
	}
	document.getElementById(identifier).innerHTML = view;
}