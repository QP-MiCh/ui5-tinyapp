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

    browsers: ["Chrome"]

  });
};