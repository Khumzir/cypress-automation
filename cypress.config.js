const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'rp2s65',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners herehiop
    },
    baseUrl: 'https://www.ultimateqa.com/',
    viewportHeight: 1080,
    viewportWidth: 1920,
    experimentalSessionAndOrigin: true,
    experimentalStudio: true
  },
});
