/*White Rabbit :
(in https://www.dpstream.net/external_link/ *)
Redirect to the external url without waiting for the countdown.*/

/*jslint browser:true */
/*global document, XPathResult, window*/

// Search for the hidden url
var stash = document.evaluate("//script[contains(., 'tennsec')]", document, null, XPathResult.ANY_TYPE, null)
                    .iterateNext().textContent;
var re = /(window.open\(\\\')(.*)(\\\'\,\\\'_blank)/;
var hidden_link = stash.match(re)[2];

//Redirect to the hidden url
window.location.href = hidden_link;
