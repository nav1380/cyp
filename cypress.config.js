const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "sve8ke",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
