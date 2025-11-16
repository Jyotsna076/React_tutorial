import Student from "./Student";

function College({college}) {
  return (
    <>
      
          <h1>Name: {college.name}</h1>
          <ul>
            <li>
              <h3>City: {college.city}</h3>
            </li>
            <li>
              <h3>Website: {college.website}</h3>
            </li>
            <li>
                <Student student={college.student} />
            </li>
          </ul>
    </>
  );
}

export default College;
