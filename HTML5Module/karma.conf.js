const process = require('process');
process.env.CHROME_BIN = require('puppeteer').executablePath();
module.exports = function(config) {
    "use strict";
    config.set({
        plugins: [
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