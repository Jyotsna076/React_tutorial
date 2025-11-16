function Student({ student }) {
  return (
    <>
      <li>
        <h3>Students:</h3>
        {student.map((student) => (
          <ul>
            <li>Name: {student.name}</li>
          </ul>
        ))}
      </li>
    </>
  );
}

export default Student;
