module.exports = function(config) {
    "use strict";
    const process = require('process');
    process.env.CHROME_BIN = require('puppeteer').executablePath();

    config.set({
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('karma-coverage'),
            require('karma-junit-reporter')
        ],
        frameworks: ["ui5"],
        browsers: ["ChromeHeadless"],
        browserConsoleLogOptions: {
            level: "error"
        }
    });
};