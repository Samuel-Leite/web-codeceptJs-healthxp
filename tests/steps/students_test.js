Feature("Plataforma Health Experience");

const { loginPage, dashPage } = inject();

const users = require("../../resources/users");
const students = require("../../resources/students");

Scenario("Cadastrar aluno com sucesso", ({ I }) => {
  const user = users.admin;
  const student = students.create;

  I.deleteStudent(student.email)

  loginPage.doLogin(user);
  dashPage.userLoggedIn(user.name);

  I.click("Cadastrar"); //=> '//span[text()="Cadastrar"]/../..'
  I.fillField("#name", student.name);
  I.fillField("#email", student.email);
  I.fillField("#age", student.age);
  I.fillField("#weight", student.weight);
  I.fillField("#feet_tall", student.feet_tall);
  I.click("Cadastrar"); //=> 'button[form="formStudent"]'
  I.see('Dados cadastrados com sucesso.', '#swal2-content')
});
