/* eslint-disable no-undef */
const { I } = inject()

const locs = {
  lblQuestion: '.scrollbar-container p',
  btnQuestion: '.scrollbar-container p',
  btnSend: 'Enviar resposta',
  txtAnswer: 'textarea[name=answer]'
}

module.exports = {
  haveQuestion(question) {
    I.see(question, locs.lblQuestion)
  },

  openQuestion(question) {
    I.click(question, locs.btnQuestion)
  },

  sendAnswer(answer) {
    I.fillField(locs.txtAnswer, answer)
    I.click(locs.btnSend)
  }
}
