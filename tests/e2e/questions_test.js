/* eslint-disable no-undef */
Feature('Cadastro alunos na plataforma Health Experience')

const { loginPage, studentPage } = inject()

const users = require('../../resources/data/users')
const data = require('../../resources/data/questions')

Scenario('Recebimento de notificação com pergunta do aluno', ({ I }) => {
  const user = users.admin
  const dataQuestions = data.notification

  I.resetStudent(dataQuestions.student)
  I.createEnroll(dataQuestions)
  I.createQuestion(dataQuestions.question)

  loginPage.doLogin(user)
  studentPage.navbar.userLoggedIn(user.name)

  studentPage.navbar.openNotification()
  studentPage.notification.haveQuestion(dataQuestions.question)
  studentPage.notification.openQuestion(dataQuestions.question)
  studentPage.notification.sendAnswer(dataQuestions.answer)
  studentPage.popup.haveText('Resposta enviada com sucesso')
}).tag('wip')