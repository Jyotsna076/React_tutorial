import ReusableLoop from "./ReusableLoop";

function LoopMap() {
  const userNames = ["Krishna", "Ravi", "Kumar", "Raju", "Rahul"];
  const UserData = [
    { id: 1, email: "Krishna@gmail.com", name: "Krishna", age: 24 },
    { id: 2, email: "ravi@gmail.com", name: "Ravi", age: 25 },
    { id: 3, email: "kumar@gmail.com", name: "Kumar", age: 26 },
    { id: 4, email: "raju@gmail.com", name: "Raju", age: 27 },
    { id: 5, email: "rahul@gmail.com", name: "Rahul", age: 28 },
  ];

  return (
    <>
      {/* <h1>Loop in JSX with Map function</h1>
      <table border="6">
        <thead>
          <tr>
            <td>Id</td>
            <td>Email</td>
            <td>Name</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {UserData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table> */}

      <h1>Reuse Component in loop.</h1>
      {
        UserData.map((user) => (
            <div>
                <ReusableLoop data={user}/>
            </div>
        )
      )}
    </>
  );
}

export default LoopMap;

// --- Array ---
// Array is a collection of multiple data.
// Array is a object.
// Array is a non-primitive data type.
//Example:  const userNames = ["Krishna", "Ravi", "Kumar", "Raju", "Rahul"];
