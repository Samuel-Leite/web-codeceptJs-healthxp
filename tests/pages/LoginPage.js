/* eslint-disable no-undef */
const { I } = inject()

const popup = require('./components/Popup')

module.exports = {
  popup, // versão alternativa do constructor em Java referenciando os componentes

  go() {
    I.amOnPage('/')
  },

  fill(user) {
    user.email ? I.fillField('#email', user.email) : I.say('empty email')
    user.password ? I.fillField('#password', user.password) : I.say('empty email')
  },

  submit() {
    I.click('//button[text()="Entrar"]')
  },

  doLogin(user) {
    this.go()
    this.fill(user)
    this.submit()
  }
}
