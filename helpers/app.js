const express = require("express");
const app = express();

app.use(express.json());

const db = require("./db");

app.post("/students", db.deleteAndCreateStudent);
app.delete("/students/:email", db.deleteStudentByEmail);
app.post("/enrolls", db.insertEnrollByEmail);

app.listen(5000);
