var config =
{
	defaultTab: "Social", /* Tell Staert which tab to default to. Tabs are defined below (ex. label: 'News',) */
	stickies: /* Stickies show up in the top-right of the navbar as links (not tabs). */
	[
		"GitHub|https://github.com"
	],
	tabs: /* Tabs are how you organize your favorites. These show up as tabs in the top-left of the navbar. */
	[
		{ /* Begins a new tab. */
			label: 'News', /* This is how you label each tab. */
			items:
			[ /* Begin the list of favorites for this tab. */
				"Feedly|https://feedly.com", /* Pay careful attention to how favorites are formatted. The convention is name|url. */
				"AOL Reader|http://reader.aol.com",
				"Digg Reader|http://digg.com/reader",
				"---", /* A separator: you can create visual separation in each tab by adding one or more hyphens/dashes. */
				"Google News|https://news.google.com",
				"Yahoo! News|https://www.yahoo.com/news/", /* Note the comma after each item. */
				"Slashdot|https://slashdot.org" /* Note there's no comma after the final item in each tab. */
			]
		}, /* Note the comma after each tab definition. */
		{
			label: 'Social',
			items:
			[
				"Facebook|https://www.facebook.com",
				"Twitter|https://twitter.com",
				"Instagram|https://www.instagram.com",
				"Google Plus|https://plus.google.com",
				"LinkedIn|https://www.linkedin.com",
				"TweetDeck|https://tweetdeck.twitter.com",
				"Pinterest|https://www.pinterest.com",
				"Meetup|http://www.meetup.com",
				"Klout|https://klout.com"
			]
		},
		{
			label: 'Shopping',
			items:
			[
				"Amazon|https://smile.amazon.com",
				"eBay|http://www.ebay.com/",
				"Harbor Freight|http://www.harborfreight.com",
				"Tractor Supply|http://www.tractorsupply.com/"
			]
		},
		{
			label: 'Entertainment',
			items:
			[
				"Soma FM|https://somafm.com/",
				"Pandora|http://www.pandora.com/",
				"---",
				"Youtube|https://www.youtube.com",
				"Vimeo|https://vimeo.com"
			]
		} /* No comma here because it's the last tab. */
	]
}