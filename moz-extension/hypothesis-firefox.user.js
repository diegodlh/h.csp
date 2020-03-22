// ==UserScript==
// @name     Hypothesis FF Workaround
// @version  1
// @grant    none
// @run-at	 document-start
// @include  https://hypothes.is/oauth/authorize*
// ==/UserScript==
var origin = new URLSearchParams(window.location.search).get('origin');
if (window.opener) {
  var scriptTag = document.createElement('script');
  scriptTag.className = 'js-hypothesis-settings';
  scriptTag.textContent = '{"origin": "' + origin + '"}';
  scriptTag.type = 'application/json';
  document.head.appendChild(scriptTag);
}
