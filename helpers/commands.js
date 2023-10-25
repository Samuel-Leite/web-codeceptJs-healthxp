/* eslint-disable no-undef */
// in this file you can append custom step methods to 'I' object
const axios = require('axios')

module.exports = function () {
  return actor({
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

    async resetStudent(student) {
      const response = await this.sendPostRequest('/students', student)
      this.seeResponseCodeIsSuccessful()

      const resetStudentId = response.data.student_id
      return resetStudentId // Retorna o student_id
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
    },

    async createQuestion(question) {
      const data = require('../resources/questions')
      const dataQuestions = data.notification

      // Chama a função resetStudent e obtém o studentId
      const studentIdFromActor = await this.resetStudent(dataQuestions.student)

      // Verifica se studentId foi definido
      if (!studentIdFromActor) {
        throw new Error(
          'resetStudentId não está definido. Certifique-se de chamar resetStudent antes de createQuestion.'
        )
      }

      try {
        const response = await axios.post(
          `http://localhost:3333/students/${studentIdFromActor}/help-orders`,
          { question }
        )
        this.seeResponseCodeIsSuccessful()
        return response.data
      } catch (error) {
        console.error('Erro ao tentar criar pergunta:', error.response?.data || error.message)
        throw error
      }
    }
  })
}
