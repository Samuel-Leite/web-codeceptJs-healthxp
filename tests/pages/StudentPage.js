const { I } = inject();

const navbar = require("./components/Navbar");
const popup = require("./components/Popup");

module.exports = {
  // versão alternativa do constructor em Java referenciando os componentes
  navbar,
  popup,

  goToRegister() {
    I.click("Cadastrar");
  },

  submitForm(student) {
    I.fillField("#name", student.name);
    I.fillField("#email", student.email);
    I.fillField("#age", student.age);
    I.fillField("#weight", student.weight);
    I.fillField("#feet_tall", student.feet_tall);
    I.click("Cadastrar");
  },
};
