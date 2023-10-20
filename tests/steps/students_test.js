Feature("Plataforma Health Experience");

const { loginPage, navbar, studentPage } = inject();

const users = require("../../resources/users");
const students = require("../../resources/students");

Scenario("Cadastrar aluno com sucesso", ({ I }) => {
  const user = users.admin;
  const student = students.create;

  I.deleteStudent(student.email);

  loginPage.doLogin(user);
  studentPage.navbar.userLoggedIn(user.name);
  studentPage.goToRegister();
  studentPage.submitForm(student);
  studentPage.popup.haveText("Dados cadastrados com sucesso.");
});
