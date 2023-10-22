/* eslint-disable no-undef */
// in this file you can append custom step methods to 'I' object

module.exports = function () {
  return actor({
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

    resetStudent(student) {
      this.sendPostRequest('/students', student)
      this.seeResponseCodeIsSuccessful()
    },

    deleteStudent(student) {
      this.sendDeleteRequest('/students/' + student)
      this.seeResponseCodeIsSuccessful()
    },

    async createEnroll(dataEnrolls) {
      const response = await this.sendPostRequest('/enrolls', {
        email: dataEnrolls.student.email,
        plan_id: dataEnrolls.plan.id,
        price: dataEnrolls.plan.price
      })
      this.seeResponseCodeIsSuccessful()

      return response.data.enrollment_code
    }
  })
}
