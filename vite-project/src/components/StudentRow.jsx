function StudentRow({ student, updateScore, deleteStudent }) {
  const isPass = Number(student.score) >= 40;

  return (
    <tr>
      <td>{student.name}</td>

      <td>
        <input
  type="text"
  placeholder="Enter marks"
  value={student.score}
  onChange={(e) => {
    const value = e.target.value;

    
    if (value === "" || /^[0-9]+$/.test(value)) {
      updateScore(student.id, value);
    }
  }}
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