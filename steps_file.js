// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

    resetStudent(student) {
      this.sendPostRequest("/students", student);
      this.seeResponseCodeIsSuccessful();
    },

    deleteStudent(student) {
      this.sendDeleteRequest('/students/' + student);
      this.seeResponseCodeIsSuccessful();
    },
  });
}
