/*White Rabbit :
(in *:// www.voirfilms.info/ *-*.htm)
Delete div which contains ads, toro-tags.com ads.*/

/*jslint browser:true */

css_query = ".responsive-ad, .adspopupserie, .linker div, .linker br";
css_query += ", a[href*='toroadvertisingmedia.com']";
document.querySelectorAll(css_query).forEach(e => e.parentNode.removeChild(e));
