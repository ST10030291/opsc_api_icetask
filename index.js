const express = require("express");
const app = express();
app.use(express.json());

let students = []; // In-memory data

// Create a student
app.post("/api/students", (req, res) => {
    const student = req.body;
    students.push(student);
    res.status(201).send(student);
});

// Get all students
app.get("/api/students", (req, res) => {
    res.status(200).json(students);
});

// Update a student
app.put("/api/students/:id", (req, res) => {
    const id = req.params.id;
    const updatedStudent = req.body;
    students = students.map((student) => (student.id === id ? updatedStudent : student));
    res.status(200).send(updatedStudent);
});

// Delete a student
app.delete("/api/students/:id", (req, res) => {
    const id = req.params.id;
    students = students.filter((student) => student.id !== id);
    res.status(200).send({ message: "Student deleted" });
});

app.listen(3000, () => console.log("Server is running"));