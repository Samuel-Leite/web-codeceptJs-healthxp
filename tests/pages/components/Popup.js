/* eslint-disable no-undef */
const { I } = inject()

module.exports = {
  haveText(text) {
    I.see(text, '#swal2-content')
  },

  confirm() {
    I.click('Confirmar')
  },

  back() {
    I.click('.swal2-cancel')
  }
}
