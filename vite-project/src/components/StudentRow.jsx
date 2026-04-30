function StudentRow({ student, updateScore, deleteStudent }) {
  const isPass = Number(student.score) >= 40;

  return (
    <tr>
      <td>{student.name}</td>

      <td>
        <input
          type="number"
          value={student.score}
          onChange={(e) => updateScore(student.id, e.target.value)}
        />
      </td>

      <td>{isPass ? "Pass" : "Fail"}</td>

      <td>
        <button onClick={() => deleteStudent(student.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default StudentRow;