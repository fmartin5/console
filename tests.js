load("console.js");


load("testing.js");


(function tests() {	
	"use strict";
	
	const baseURL = "https://github.com/w3c/web-platform-tests/raw/master/console";
	const urls = [
		baseURL + "/" + "console-count-label-conversion.any.js",
		baseURL + "/" + "console-is-a-namespace.any.js",
		baseURL + "/" + "console-tests-historical.any.js",
		baseURL + "/" + "console-time-label-conversion.any.js"
	];

	for(const url of urls) {
		print("Loading test suite from: " + url);
		load(url);
	}
}());
