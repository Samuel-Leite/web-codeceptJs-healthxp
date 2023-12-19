/* eslint-disable no-undef */
const { I } = inject()

const locs = {
  lblMensagemBoasVindas: 'aside .logged-user',
  btnEnrolls : 'a[href="/enrollments"]',
  btnNotification: '.notifications button'
}

module.exports = {
  userLoggedIn(name) {
    I.seeTextEquals('Olá, ' + name, locs.lblMensagemBoasVindas)
  },

  goToEnrolls() {
    I.click(locs.btnEnrolls)
  },

  openNotification() {
    I.click(locs.btnNotification)
  }
}
