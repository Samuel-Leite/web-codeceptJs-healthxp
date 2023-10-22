/* eslint-disable no-undef */
const { I } = inject()

// versão alternativa do constructor em Java referenciando os componentes
const navbar = require('./components/Navbar')
const popup = require('./components/Popup')

module.exports = {
  // versão alternativa do constructor em Java referenciando os componentes
  navbar,
  popup,

  goToForm() {
    I.click('a[href="/enrollments/new"]')
  },

  selectItem(item, value) {
    I.click(`.select_${item}`)
    I.fillField(`input[aria-label="select_${item}"]`, value)
    I.click('//div[contains(@class, "option")]')
  },

  fillCard(student) {
    I.fillField('#card_number', '4242424242424242')
    I.fillField('#card_holder', student)
    I.fillField('#card_month', '12')
    I.fillField('#card_year', '2030')
    I.fillField('#card_cvv', '123')
  },

  submite() {
    I.click('Cadastrar')
  }
}
