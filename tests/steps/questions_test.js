/* eslint-disable no-undef */
Feature('Cadastro alunos na plataforma Health Experience')

const { loginPage, studentPage } = inject()

const users = require('../../resources/users')
const data = require('../../resources/questions')

Scenario('Recebimento de notificação com pergunta do aluno', ({ I }) => {
  const user = users.admin
  const dataQuestions = data.create

  I.resetStudent(dataQuestions.student)
  I.createEnroll(dataQuestions)
  I.createQuestion(dataQuestions.question)

  loginPage.doLogin(user)
  studentPage.navbar.userLoggedIn(user.name)
  I.wait(10)
})
