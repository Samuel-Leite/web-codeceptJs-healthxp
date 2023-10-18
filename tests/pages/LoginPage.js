const { I } = inject();

module.exports = {
  go() {
    I.amOnPage("/");
  },

  fill(user) {
    if (user.email) {
      I.fillField("#email", user.email);
    }

    if (user.password) {
      I.fillField("#password", user.password);
    }
  },

  submit() {
    I.click('//button[text()="Entrar"]');
  },

  doLogin(user) {
    this.go();
    this.fill(user);
    this.submit();
  },

  popUpHave(text) {
    I.see(text, "#swal2-content");
  },

  popUpBack() {
    I.click(".swal2-cancel");
  },
};
