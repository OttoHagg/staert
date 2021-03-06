function getGlyphUrl(aUrl) {
	var faviconSvc = "http://www.google.com/s2/favicons?domain=";
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
function getCurrentTab(defaultTab) {
	var currentTab = null;
	try {
		currentTab = localStorage.getItem("currentTab");
		if(currentTab === null) {
			throw "Empty";
		}
	} catch(exception) {
		currentTab = defaultTab;
	}
	return currentTab;
}
function parseFavorite(item) {
	var arr = item.split("|");
	var theTitle = arr[0];
	var theUrl = arr[1];
	if(! hasProtocol(theUrl)) { theUrl = "http://" + theUrl; }
	var favorite = {};
	favorite['theTitle'] = theTitle;
	favorite['theUrl'] = theUrl;
	return favorite;
}
function setTabs(tabs, current) {
	var html = '';
	for(var i in tabs) {
		var label = tabs[i].label;
		if(label == current) {
			html += '<li class="pure-menu-item pure-menu-selected">';
			setFavorites(tabs[i].items);
		} else {
			html += '<li class="pure-menu-item">';
		}
		html += '<a class="pure-menu-link" href="javascript:staert(\''+ label +'\');">';
		html += label;
		html += '</a>';
		html += '</li>';
	}
	document.getElementById("tabs").innerHTML = html;
}
function setStickies(stickies) {
	if (typeof (stickies) !== "undefined") {
		var html = '<ul id="stickies-list">';
		for(var j in stickies) {
				var fav = parseFavorite(stickies[j]);
				html += '<li>';
				html += '<a href="' + fav.theUrl + '" title="' + fav.theTitle + '" target="_blank" rel="external" role="link">';
				html += '<img src="' + getGlyphUrl(fav.theUrl) + '" width="16" height="16" alt="Icon for ' + fav.theUrl + '" class="icon">';
				html += fav.theTitle;
				html += '</a>';
				html += '</li>';
		}
	  html += '</ul>';
		document.getElementById("stickies").innerHTML = html;
	}
}
function setFavorites(favsarray) {
	var html = '<div class="pure-g">';
	for(var j in favsarray) {
		if(favsarray[j].startsWith('-')) {
			html += '</div>';
      html += '<div class="pure-u-4-4"><hr class="separator"/></div>';
      html += '<div class="pure-g">';
		} else {
			var fav = parseFavorite(favsarray[j]);
			html += '<div class="pure-u-1-4 favorite">';
			html += '<a href="' + fav.theUrl + '" title="' + fav.theTitle + '" target="_blank" rel="external" class="favorite-link" role="link">';
			html += '<img src="' + getGlyphUrl(fav.theUrl) + '" width="16" height="16" alt="Icon for ' + fav.theUrl + '">';
			html += fav.theTitle;
			html += '</a>';
			html += '</div>';
		}
	}
  html += '</div>';
	document.getElementById("favorites").innerHTML = html;
}
function staert(current) {
	try {
		localStorage.setItem("currentTab", current);
	} catch(exception) { /* noop */ }
	setStickies(config.stickies);
	setTabs(config.tabs, current);
}
