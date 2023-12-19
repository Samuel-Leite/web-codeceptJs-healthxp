/* eslint-disable no-undef */
const { I } = inject()

// versão alternativa do constructor em Java referenciando os componentes
const navbar = require('./components/Navbar')
const popup = require('./components/Popup')
const notification = require('./components/Notification')

const locs = {
  txtName: '#name',
  txtEmail: '#email',
  txtAge: '#age',
  txtWeight: '#weight',
  txtFeetTall: '#feet_tall',
  txtSearch: 'input[placeholder="Buscar por nome"]',
  btnCadastrar: 'Cadastrar',
  btnRemove: (email) => `//td[text()="${email}"]/..//button`,
  lblMessagemAlerta: (label) => `//label[text()="${label}"]/..//span`
}

module.exports = {
  // versão alternativa do constructor em Java referenciando os componentes
  navbar,
  popup,
  notification,

  goToRegister() {
    I.click(locs.btnCadastrar)
  },

  submitForm(student) {
    if (student.name) I.fillField(locs.txtName, student.name)
    if (student.email) I.fillField(locs.txtEmail, student.email)
    if (student.age) I.fillField(locs.txtAge, student.age)
    if (student.weight) I.fillField(locs.txtWeight, student.weight)
    if (student.feet_tall) I.fillField(locs.txtFeetTall, student.feet_tall)
    I.click(locs.btnCadastrar)
  },

  alertMessage(label, text) {
    I.see(text, locs.lblMessagemAlerta(label))
  },

  search(name) {
    I.fillField(locs.txtSearch, name)
  },

  remove(email) {
    I.waitForElement(locs.btnRemove(email));
    I.click(locs.btnRemove(email))
  }
}
