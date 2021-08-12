const process = require('process');
process.env.CHROME_BIN = require('puppeteer').executablePath();
module.exports = function(config) {
  config.set({

    frameworks: ["ui5"],
    basePath: "./HTML5Module",
    ui5: {
        type: "application",
        paths: {
            webapp: "webapp"
        }
    },

    browsers: ["ChromeHeadless"]

  });
};