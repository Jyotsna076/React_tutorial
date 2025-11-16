const ReusableLoop = ({ data }) => {
  return (
    <div style={{ border: "2px solid blue", margin: "10px", padding: "10px", width: "300px" }}>
      <h3>
        Name: <span style={{ color: "green" }}>{data.name} </span>
      </h3>
      <h3>
        Age: <span style={{ color: "green" }}>{data.age} </span>
      </h3>
      <h3>
        Email: <span style={{ color: "green" }}>{data.email} </span>
      </h3>
    </div>
  );
};

export default ReusableLoop;

//import this file in App.jsx
