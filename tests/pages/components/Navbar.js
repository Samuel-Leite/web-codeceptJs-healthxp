/* eslint-disable no-undef */
const { I } = inject()

module.exports = {
  userLoggedIn(name) {
    I.seeTextEquals('Olá, ' + name, 'aside .logged-user')
  }
}
