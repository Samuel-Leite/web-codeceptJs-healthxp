/* eslint-disable no-undef */
const { I } = inject()

// versão alternativa do constructor em Java referenciando os componentes
const navbar = require('./components/Navbar')
const popup = require('./components/Popup')

const locs = {
  btnEnrolls: 'a[href="/enrollments/new"]',
  btnCadastrar: 'Cadastrar',
  btnOption: '//div[contains(@class, "option")]',
  selItem: (item) => `//div[contains(@class, "select_${item}")]`,
  txtItem: (item) => `input[aria-label="select_${item}"]`,
  txtCardNumber: '#card_number',
  txtCardHolder: '#card_holder',
  txtCardMonth: '#card_month',
  txtCardYear: '#card_year',
  txtCardCVV: '#card_cvv',
}

module.exports = {
  // versão alternativa do constructor em Java referenciando os componentes
  navbar,
  popup,

  goToForm() {
    I.click(locs.btnEnrolls)
  },

  selectItem(item, value) {
    I.click(locs.selItem(item));
    I.fillField(locs.txtItem(item), value)
    I.click(locs.btnOption)
  },

  fillCard(student) {
    I.fillField(locs.txtCardNumber, '4242424242424242')
    I.fillField(locs.txtCardHolder, student)
    I.fillField(locs.txtCardMonth, '12')
    I.fillField(locs.txtCardYear, '2030')
    I.fillField(locs.txtCardCVV, '123')
  },

  submite() {
    I.click(locs.btnCadastrar)
  }
}
