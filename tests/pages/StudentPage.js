/* eslint-disable no-undef */
const { I } = inject()

// versão alternativa do constructor em Java referenciando os componentes
const navbar = require('./components/Navbar')
const popup = require('./components/Popup')
const notification = require('./components/Notification')

module.exports = {
  // versão alternativa do constructor em Java referenciando os componentes
  navbar,
  popup,
  notification,

  goToRegister() {
    I.click('Cadastrar')
  },

  submitForm(student) {
    if (student.name) I.fillField('#name', student.name)
    if (student.email) I.fillField('#email', student.email)
    if (student.age) I.fillField('#age', student.age)
    if (student.weight) I.fillField('#weight', student.weight)
    if (student.feet_tall) I.fillField('#feet_tall', student.feet_tall)
    I.click('Cadastrar')
  },

  alertMessage(label, text) {
    I.see(text, `//label[text()="${label}"]/..//span`)
  },

  search(name) {
    I.fillField('input[placeholder="Buscar por nome"]', name)
  },

  remove(email) {
    I.click(`//td[text()="${email}"]/..//button`)
  }
}
