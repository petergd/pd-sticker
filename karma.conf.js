const puppeteer = require('puppeteer');
process.env.CHROME_BIN = puppeteer.executablePath();
module.exports = function(config) {
  config.set({
    basePath: "",
    urlRoot: "/pd-sticker/",
    baseURL: "http://10.11.12.29:9876/",
    frameworks: ["jasmine","chai"],
    files: [
		{ pattern: "node_modules/pd-indicator/pd-indicator.js", type: "module", included: false },
        { pattern: "tests/*.html", watched:true, served:true, included:true },
        { pattern: "tests/*.test.js", watched:true, type: "module", included: true },
        { pattern: "pd-sticker.js", type: "module", included: false }
    ],
    client: {
      jasmine: {
        random: false
      }
    },
	plugins: [
		"karma-chai",
		"karma-jasmine",
		"karma-chrome-launcher",
		"karma-edge-launcher",
		"karma-es6-shim",
		"karma-firefox-launcher",
		"karma-spec-reporter"
	],
    exclude: [],
    preprocessors: {},
    reporters: ["spec"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
	processKillTimeout: 1000,
	browserSocketTimeout: 10000,
	captureTimeout: 30000,
    autoWatch: true,
    browsers: ["Firefox","ChromeHeadless"],
    singleRun: false,
    concurrency: 1
  });
};