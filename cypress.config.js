const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'fkwy51',
  e2e: {
    //baseUrl: "http://localhost:52066",
    setupNodeEvents(on, config) {
    // implement node event listeners here
    },
  },
});
