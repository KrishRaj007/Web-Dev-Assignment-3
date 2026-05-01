function StudentRow({ student, updateScore, deleteStudent }) {
  // Determine if the student passed (score >= 40)
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
            // Only allow numbers or empty string[cite: 4]
            if (value === "" || /^[0-9]+$/.test(value)) {
              updateScore(student.id, value);
            }
          }}
        />
      </td>

      {/* FIX: Dynamic class added here to change text color[cite: 4, 6] */}
      <td className={isPass ? "pass" : "fail"}>
        {isPass ? "Pass" : "Fail"}
      </td>

      <td>
        <button onClick={() => deleteStudent(student.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default StudentRow;