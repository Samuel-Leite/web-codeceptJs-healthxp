/* eslint-disable no-undef */
Feature('Plataforma Health Experience')

const { loginPage, studentPage } = inject()

const users = require('../../resources/users')
const students = require('../../resources/students')

Scenario('Cadastrar aluno com sucesso', ({ I }) => {
  const user = users.admin
  const student = students.create

  I.deleteStudent(student.email)

  loginPage.doLogin(user)
  studentPage.navbar.userLoggedIn(user.name)
  studentPage.goToRegister()
  studentPage.submitForm(student)
  studentPage.popup.haveText('Dados cadastrados com sucesso.')
})

Scenario('Não deve cadastrar aluno duplicado', ({ I }) => {
  const user = users.admin
  const student = students.duplicate

  I.resetStudent(student)

  loginPage.doLogin(user)
  studentPage.navbar.userLoggedIn(user.name)
  studentPage.goToRegister()
  studentPage.submitForm(student)
  studentPage.popup.haveText('O email informado já foi cadastrado!')
})
