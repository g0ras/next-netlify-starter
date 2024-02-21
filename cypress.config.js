const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://next-jay-ess.netlify.app/',
    supportFile: false,
  },
});
