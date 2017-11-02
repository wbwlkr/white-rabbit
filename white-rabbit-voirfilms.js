/*
White Rabbit :
Delete div which contains ads, toro-tags.com ads, in *://www.voirfilms.info/*-*.htm
*/

css_query = '.responsive-ad, .adspopupserie, .linker div, .linker br';
css_query += ', a[href*="toroadvertisingmedia.com"]';
document.querySelectorAll(css_query).forEach(e => e.parentNode.removeChild(e));
