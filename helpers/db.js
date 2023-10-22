/* eslint-disable no-unused-vars */
const { Pool } = require('pg')

const pool = new Pool({
  host: 'babar.db.elephantsql.com',
  user: 'wgmhlqma',
  password: 'B3uEGfDerQgQmJlVb6z9ltynm2idGUGB',
  database: 'wgmhlqma',
  port: 5432
})

const deleteAndCreateStudent = (req, res) => {
  const student = req.body

  const query = `
  WITH add AS(
    INSERT INTO students (name, email, age, weight, feet_tall) 
    VALUES ($1, $2, $3, $4, $5)
  )
  DELETE FROM students WHERE email = $2;
`

  const values = [student.name, student.email, student.age, student.weight, student.feet_tall]

  pool.query(query, values, function (error, result) {
    if (error) {
      return res.status(500).json(error)
    }
    res.status(201).json(result)
  })
}

const deleteStudentByEmail = (req, res) => {
  const studentEmail = req.params.email

  const query = 'DELETE FROM students WHERE email = $1;'

  pool.query(query, [studentEmail], function (error, result) {
    if (error) {
      return res.status(500).json(error)
    }
    res.status(204).end()
  })
}

const insertEnrollByEmail = (req, res) => {
  const { email, plan_id, price } = req.body

  const query = `
    INSERT INTO enrollments (enrollment_code, student_id, plan_id, credit_card, status, price)
    SELECT
    'XPT0123' as enrollment_code,
    id as student_id,
    $2 as plan_id,
    '4242' as credit_card,
    true as status,
    $3 as price
    FROM students
    WHERE email = $1
  `

  const values = [email, plan_id, price]

  pool.query(query, values, function (error, result) {
    if (error) {
      return res.status(500).json(error)
    }
    res.status(201).end()
  })
}

module.exports = {
  deleteAndCreateStudent,
  deleteStudentByEmail,
  insertEnrollByEmail
}
