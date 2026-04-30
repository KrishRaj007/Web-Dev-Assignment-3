import { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";
import "./App.css";

function App() {
  // Main state (parent)
  const [students, setStudents] = useState([
    { id: 1, name: "Krish", score: 47 },
    { id: 2, name: "Aditya", score: 67 },
  ]);

  // Update score
  const updateScore = (id, newScore) => {
    const updated = students.map((student) =>
      student.id === id
        ? { ...student, score: Number(newScore) }
        : student
    );
    setStudents(updated);
  };

  // Add new student
  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score: Number(score),
    };
    setStudents([...students, newStudent]);
  };

  return (
    <div className="container fade-in">
      <Header />
      <AddStudentForm addStudent={addStudent} />
      <StudentTable students={students} updateScore={updateScore} />
    </div>
  );
}

export default App;