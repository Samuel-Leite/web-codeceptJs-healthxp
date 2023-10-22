/* eslint-disable no-undef */
Feature('Plataforma Health Experience')

const { loginPage, enrollsPage } = inject()

const users = require('../../resources/users')
const enrolls = require('../../resources/enrollments')

Scenario('Matricular aluno com sucesso', ({ I }) => {
  const user = users.admin
  const dataEnrolls = enrolls.create

  I.resetStudent(dataEnrolls.student)

  loginPage.doLogin(user)
  enrollsPage.navbar.goToEnrolls()
  enrollsPage.goToForm()
  enrollsPage.selectItem('student', dataEnrolls.student.name)
  enrollsPage.selectItem('plan', dataEnrolls.plan)
  enrollsPage.fillCard(dataEnrolls.student.name)
  enrollsPage.submite()
  enrollsPage.popup.haveText('Matrícula cadastrada com sucesso.')
})


