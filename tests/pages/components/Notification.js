/* eslint-disable no-undef */
const { I } = inject()

module.exports = {
  haveQuestion(question) {
    I.see(question, '.scrollbar-container p')
  },

  openQuestion(question) {
    I.click(question, '.scrollbar-container p')
  },

  sendAnswer(answer) {
    I.fillField('textarea[name=answer]', answer)
    I.click('Enviar resposta')
  }
}
