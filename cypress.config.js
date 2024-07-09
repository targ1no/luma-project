const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento2-demo.magebit.com/',
    "screenshotOnRunFailure": false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      reportFilename: 'report',
      overwrite: true,
      html: true,
      json: true,
      timestamp: 'mmddyyyy_HHMMss'
    },
    // Outras configurações do Cypress
  },
});
