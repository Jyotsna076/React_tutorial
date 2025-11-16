import { useState } from "react";

export default function UserAdd() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  const createUser = async() => {
    console.log(name,age,email,id);
    const url = "http://localhost:3000/users";
    let res = await fetch(url,{
      method: 'Post',
      body: JSON.stringify({id,name,email,age}),
    })

    res = await res.json();
    if(res) {
      alert("new user added")
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Add New User</h1>
      <label htmlFor="id">Id: </label>
      <input
        type="text"
        onChange={(event) => setId(event.target.value)}
        placeholder="Enter Id"
      />
      <br />
      <br />
      
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter Name"
      />
      <br />
      <br />
      <label htmlFor="age">Age: </label>
      <input
        type="number"
        onChange={(event) => setAge(event.target.value)}
        placeholder="Enter age"
      />
      <br />
      <br />
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter Email"
      />
      <br />
      <br />
      <button onClick={createUser}>Add User</button>
    </div>
  );
}
