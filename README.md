# STAERT
STAERT is a lightweight, cross-browser, self-hosted start page in the spirit of [MyFav.es](https://www.myfav.es/) or [Symbaloo](http://www.symbaloo.com/).

![STAERT Screenshot](http://i1366.photobucket.com/albums/r778/sugonaut/Screenshots/STAEligRT_-_2016-06-24_11.18.44_zpsb95vl2xu.png)

## Motivation
I want a very simple browser start page that is always in sync, across all the browsers I use, giving me the same exact user experience. I've tried various services but never really liked any of them, and I don't want to rely on a 3rd party. STAERT is the result of my requirements, and I'm making it available to others. The only downside, perhaps, for you is that you have to be comfortable editing the configuration. Having said that, I've made it as easy as possible for you.

## Features
* Organize favorites under tabs
* Stickies for the most frequently accessed favorites
* Visual separators to further organize your favorites on each tab

## Installation
[Download](https://github.com/OttoHagg/staert/archive/master.zip) and extract STAERT to some local directory. Using a text editor, open config.js and edit away.

### Local Installation
Set the index.html file to be your homepage in your browser. 

### Web Host Installation
Upload your customized STAERT files to your web host and set index.html to be your homepage.

### Dropbox Installation
This is the way I use STAERT, and it assumes you've installed [Dropbox](https://www.dropbox.com/) on all the devices you use. Simply move your STAERT install to your dropbox folder and follow the instructions for "Local Installation". Whenever you add/remove favorites the changes are sync'd across all your devices.

### Tips
* Firefox users can install the [New Tab Homepage](https://addons.mozilla.org/en-US/firefox/addon/new-tab-homepage/) extension to get STAERT on each new tab.
* Chrome users can install the [New Tab Redirect](https://chrome.google.com/webstore/detail/new-tab-redirect/icpgjfneehieebagbmdbhnlpiopdcmna) extension to get STAERT on each new tab.
* Safari users can tweak the homepage and new-tab behavior via the preferences dialog.

## Limitations
STAERT uses a Google service to retrieve an icon for each of your favorites. Not every site provides an icon and, if there is an icon, it may not be easily found. In this scenario, Google returns a (rather boring) default icon.

## Future
I'm not sure where this is going. I want to keep STAERT as lightweight as possible, so I don't have plans to add new features much beyond what it is now. Having said that, I've thought about adding the following features:

* URL shortener
* Local weather forcast

Let me know if you have any ideas or requests in the [Issues](https://github.com/OttoHagg/staert/issues).


## Credits
* STAERT is somewhat inspired by [Launchbot](http://launchbot.michaelxander.com).
* STAERT is responsive thanks to [Bootstrap](http://getbootstrap.com).
