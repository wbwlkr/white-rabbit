/*
White Rabbit :
Redirect to the external url without waiting for the countdown, in https://www.dpstream.net/external_link/*
*/

// Search for the hidden url
var stash = document.querySelectorAll('script:last-child')[0].textContent;
var stash = document.evaluate("//script[contains(., 'tennsec')]", document, null, XPathResult.ANY_TYPE, null).iterateNext().textContent;
var re = /(window.open\(\\\')(.*)(\\\'\,\\\'_blank)/;
var hidden_link = stash.match(re)[2];

//Redirect to the hidden url
window.location.href = hidden_link;
