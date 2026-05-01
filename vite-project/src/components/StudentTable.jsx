import StudentRow from "./StudentRow";

function StudentTable({ students, updateScore, deleteStudent }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Score</th>
          <th>Status</th>
          <th></th> {/* This empty cell extends the blue header to the end */}
        </tr>
      </thead>

      <tbody>
        {students.map((student) => (
          <StudentRow
            key={student.id}
            student={student}
            updateScore={updateScore}
            deleteStudent={deleteStudent}
          />
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;