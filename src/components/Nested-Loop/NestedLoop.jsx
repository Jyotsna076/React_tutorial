import College from "./College";

function NestedLoop() {
  const collegeData = [
    {
      name: "IIT Delhi",
      city: "Delhi",
      website: "www.iitd.ac.in",
      student: [
        {
          name: "John",
          age: 21,
          email: "John@gmail.com",
        },
        {
          name: "Jane",
          age: 22,
          email: "Jane@gmail.com",
        },
        {
          name: "Doe",
          age: 23,
          email: "Doe@gmail.com",
        },
      ],
    },
    {
      name: "IIT Bombay",
      city: "Mumbai",
      website: "www.iitb.ac.in",
      student: [
        {
          name: "Smith",
          age: 21,
          email: "Smith@gmail.com",
        },
        {
          name: "Emily",
          age: 22,
          email: "Emaily@gmail.com",
        },
        {
          name: "Brown",
          age: 23,
          email: "Brown@gmail.com",
        },
      ],
    },
    {
      name: "IIT Madras",
      city: "Chennai",
      website: "www.iitm.ac.in",
      student: [
        {
          name: "Johnson",
          age: 21,
          email: "Johnson@gmail.com",
        },
        {
          name: "Olivia",
          age: 22,
          email: "Oliva@gmail.com",
        },
        {
          name: "Davis",
          age: 23,
          email: "DAvis@gmail.com",
        },
      ],
    },
    {
      name: "IIT Kanpur",
      city: "Kanpur",
      website: "www.iitk.ac.in",
      student: [
        {
          name: "Williams",
          age: 21,
          email: "Williams@gmail.com",
        },
        {
          name: "Sophia",
          age: 22,
          email: "Sophia@gmail.com",
        },
        {
          name: "Miller",
          age: 23,
          email: "Miller@gmail.com",
        },
      ],
    },
  ];
  return (
    <>
      {collegeData.map((college, id) => (
        <div
          key={id}
          style={{
            borderBottom: "2px solid black",
            margin: "10px",
            padding: "10px",
            backgroundColor: "#ccc",
            borderRadius: "10px",
          }}
        >
          <College college={college} />
        </div>
      ))}
    </>
  );
}

export default NestedLoop;


// NOTE: THIS COMPONENT IS USED IN App.jsx file IMPORT THIS FILE IN App.jsx.......//
