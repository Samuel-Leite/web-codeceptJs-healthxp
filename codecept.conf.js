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
      url: 'http://localhost:3000',
      show: true
    },
    REST: {
      endpoint: 'http://localhost:5000'
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
  hooks: [],
  name: 'web-codeceptJs-healthxp'
}
