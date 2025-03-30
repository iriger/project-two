const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "uu8h1r",
  e2e: {
    pageLoadTimeout: 100000,
    viewportWidth: 1440,
    baseUrl: "https://telnyx.com",
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
