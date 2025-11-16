import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function EditUser() {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [Id, setId] = useState("");
  const url = "http://localhost:3000/users/" + id;
  const navigate = useNavigate()

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    let response = await fetch(url);
    response = await response.json();
    setId(response.id);
    setName(response.name);
    setAge(response.age);
    setEmail(response.email);
  };

  const UpdateUserData = async() => {
    console.log(id, name, age, email);
    let response = await fetch(url, {
        method: 'Put',
        body:JSON.stringify({id,name,age,email})
    })

    response = await response.json();
    console.log(response);
    if(response){
        alert('Updated user')
        navigate('/')
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Edit User Detail</h1>
      <input
        type="text"
        onChange={event => setId(event.target.value)}
        placeholder="Enter id"
      />
      <br />
      <br />
      <input
        type="text"
        onChange={event => setName(event.target.value)}
        placeholder="Enter name"
      />
      <br />
      <br />
      <input
        type="text"
        onChange={event => setAge(event.target.value)}
        placeholder="Enter age"
      />
      <br />
      <br />
      <input
        type="text"
        onChange={event => setEmail(event.target.value)}
        placeholder="Enter email"
      />
      <br />
      <br />
      <button onClick={UpdateUserData}>Update user</button>
    </div>
  );
}
