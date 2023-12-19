/* eslint-disable no-undef */
const { I } = inject()

const locs = {
  lblMensagemPopup: '#swal2-content',
  btnConfirm: 'Confirmar',
  btnBack: '.swal2-cancel'
}

module.exports = {
  haveText(text) {
    I.see(text, locs.lblMensagemPopup)
  },

  confirm() {
    I.click(locs.btnConfirm)
  },

  back() {
    I.click(locs.btnBack)
  }
}
