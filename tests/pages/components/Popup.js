const { I } = inject();

module.exports = {

  haveText(text) {
    I.see(text, "#swal2-content");
  },

  back() {
    I.click(".swal2-cancel");
  },
};
