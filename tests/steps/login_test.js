Feature("Plataforma Health Experience");

const { loginPage, dashPage } = inject();

const users = require("../../resources/users");

Scenario("Login com sucesso", () => {
  const user = users.admin;

  loginPage.doLogin(user);
  dashPage.userLoggedIn(user.name)
});

Scenario("Login com senha inválida", () => {
  const user = users.inv_pass;

  loginPage.doLogin(user);
  loginPage.popUpHave(
    "Suas credenciais são inválidas, por favor tente novamente!"
  );
});

Scenario("Login com e-mail não cadastrado", () => {
  const user = users.email_not_found;

  loginPage.doLogin(user);
  loginPage.popUpHave(
    "Suas credenciais são inválidas, por favor tente novamente!"
  );
});

Scenario("Login com e-mails inválidos", () => {
  const emails = users.inv_emails;

  emails.forEach((user) => {
    loginPage.doLogin(user);
    loginPage.popUpHave("Insira um email válido.");
    loginPage.popUpBack();
  });
});

Scenario("Login com e-mail em branco", () => {
  const user = users.empty_email;

  loginPage.doLogin(user);
  loginPage.popUpHave("Os campos email e senha são obrigatórios.");
});

Scenario("Login com senha em branco", () => {
  const user = users.empty_pass;

  loginPage.doLogin(user);
  loginPage.popUpHave("Os campos email e senha são obrigatórios.");
});
