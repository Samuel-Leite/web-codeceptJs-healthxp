/* eslint-disable no-undef */
const { I } = inject()

const popup = require('./components/Popup')

const locs = {
  txtEmail: '#email',
  txtPassword: '#password',
  btnEntrar: '//button[text()="Entrar"]'
}

module.exports = {
  popup, // versão alternativa do constructor em Java referenciando os componentes

  go() {
    I.amOnPage('/')
  },

  fill(user) {
    user.email ? I.fillField(locs.txtEmail, user.email) : I.say('empty email')
    user.password ? I.fillField(locs.txtPassword, user.password) : I.say('empty email')
  },

  submit() {
    I.click(locs.btnEntrar)
  },

  doLogin(user) {
    this.go()
    this.fill(user)
    this.submit()
  }
}
