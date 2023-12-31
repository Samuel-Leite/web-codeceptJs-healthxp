/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const Helper = require('@codeceptjs/helper')
const { container, output, helper } = require('codeceptjs')
const execSync = require('child_process').execSync
const utf8 = { encoding: 'utf-8' }

class hooks extends Helper {
  _init() {
    // before all tests
    console.log('*************************************')
    console.log('***** Dados Gerais da Execução ******')
    console.log(`BROWSER: ${process.env.BROWSER}`)
    try {
      execSync('rm -rfv output/', utf8)
      console.log('DIRETORIO: "output" excluído com sucesso!')
    } catch (error) {
      console.error(`Ocorreu um erro ao excluir o diretório: ${error}`)
    }
    console.log('*************************************')
  }

  _before(test) {
    // before a test
    codeceptjs.container
      .helpers()
      .Playwright.browserContext.setGeolocation({ latitude: -23.5489, longitude: -46.6388 })
    codeceptjs.container.helpers().Playwright.browserContext.grantPermissions(['geolocation'])
    console.log('--------------------------------Start----------------------------------')
    let allure = codeceptjs.container.plugins('allure')
    allure.addParameter('0', 'ENV', process.env.BROWSER)
  }
  _after() {
    // after a test
    console.log('--------------------------------End----------------------------------')
  }
  _beforeStep() {} // before each step
  _afterStep() {
    // after each step
  }
  _beforeSuite() {} // before each suite
  _afterSuite() {} // after each suite
  _passed() {} // after a test passed
  _failed() {} // after a test failed
  _finishTest() {
    // after all tests
    execSync('allure serve output', utf8)
  }
}
module.exports = hooks
