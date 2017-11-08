/*White Rabbit :
(in *:// www.voirfilms.info/ *-*.htm)
Delete div which contains ads, toro-tags.com ads.*/

/*jslint browser:true */

document.querySelector('.allvideolink > .scroller').setAttribute('class','scroller');
var scrollerNode = document.querySelector('.allvideolink > .scroller');
while (scrollerNode.firstChild) {
    scrollerNode.removeChild(scrollerNode.firstChild);
}

css_query = ".responsive-ad, .adspopupserie, .linker";
css_query += ", a[href*='toroadvertisingmedia.com']";
document.querySelectorAll(css_query).forEach(e => e.parentNode.removeChild(e));
