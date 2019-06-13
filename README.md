# h.csp
CSP workarounds for Hypothes.is

hypothesis.json file implements the JavaScript rule found in the header_editor file,
but in a json file.

It is to be imported to Header Editor, an extension both for Chrome and Firefox:
https://github.com/FirefoxBar/HeaderEditor

It lets the Hypothesis client (http://hypothes.is) run in sites with CSP, when Hypothesis
is run as an injected script (bookmarklet or userscript with Greasemonkey, Tampermonkey etc),
instead of with an extension (which at the moment only works -the extension- with Chrome).
