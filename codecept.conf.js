const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure')
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS)
require('dotenv').config()

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins()

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: process.env.BROWSER,
      url: require('./resources/conf/web.json').urlBase,
      waitForTimeout: 5000,
      waitForNavigation: 'networkidle0',
      show: true
    },
    REST: {
      endpoint: require('./resources/conf/api.json').urlBaseApi,
    },
    JSONResponse: {
      requestHelper: 'REST'
    },
    Hooks: {
      require: './helpers/hooks.js'
    }
  },
  include: {
    I: './helpers/commands.js',
    loginPage: './tests/pages/LoginPage.js',
    studentPage: './tests/pages/StudentPage.js',
    enrollsPage: './tests/pages/EnrollsPage.js'
  },
  bootstrap: null,
  mocha: {},
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: './output'
    },
    stepByStepReport: {
      enabled: true,
      screenshotsForAllureReport: true,
      ignoreSteps: ['grab*'],
      output: './output',
      deleteSuccessful: false,
      disableScreenshotOnFail: false
    },
    // Habilitar o ultimo print em caso de falha
    screenshotOnFail: {
      enabled: true
    }
  },
  hooks: [],
  name: 'web-codeceptJs-healthxp'
}
