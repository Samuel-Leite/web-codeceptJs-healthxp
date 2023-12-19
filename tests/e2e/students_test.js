/* eslint-disable no-undef */
Feature('Cadastro alunos na plataforma Health Experience')

const { loginPage, studentPage } = inject()

const users = require('../../resources/data/users')
const students = require('../../resources/data/students')

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

Scenario('Não deve cadastrar aluno com e-mail duplicado', ({ I }) => {
  const user = users.admin
  const student = students.duplicate

  I.resetStudent(student)

  loginPage.doLogin(user)
  studentPage.navbar.userLoggedIn(user.name)
  studentPage.goToRegister()
  studentPage.submitForm(student)
  studentPage.popup.haveText('O email informado já foi cadastrado!')
})

Scenario('Excluir aluno sem matrícula', ({ I }) => {
  const user = users.admin
  const student = students.remove

  I.resetStudent(student)

  loginPage.doLogin(user)
  studentPage.navbar.userLoggedIn(user.name)
  studentPage.search(student.name)
  studentPage.remove(student.email)
  studentPage.popup.confirm()
  studentPage.popup.haveText('Exclusão realizada com sucesso.')
})

Scenario('Validar obrigatoriedade dos campos', () => {
  const user = users.admin
  const student = students.required

  loginPage.doLogin(user)
  studentPage.navbar.userLoggedIn(user.name)
  studentPage.goToRegister()
  studentPage.submitForm(student)

  studentPage.alertMessage('Nome completo', 'Nome é obrigatório')
  studentPage.alertMessage('E-mail', 'O email é obrigatório')
  studentPage.alertMessage('Idade', 'A idade é obrigatória')
  studentPage.alertMessage('Peso (em kg)', 'O peso é obrigatório')
  studentPage.alertMessage('Altura', 'A altura é obrigatória')
})
