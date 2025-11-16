import { useState } from "react";

function DerivedState() {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState('');

    const addUsers = () => {
        setUsers([...users, user]);
        console.log(users);
    }
    const total = users.length;
    const lastUser = users[users.length - 1];
    const uniqueUsers = [...new Set(users)].length;

  return (
    <>
    <h1>Derived State</h1>
    <h2>Total User: {total}</h2>
    <h2>Last User: {lastUser}</h2>
    <h2>Unique User: {uniqueUsers}</h2>

    <input type="text" placeholder="Add new user" onChange={(event) => setUser(event.target.value)}/>
    <button onClick={addUsers}>Add User</button>
    {
        users.map((item, index) => (
            <h3 key={index}>{item}</h3>
        ))
    }
    </>
  )
}

export default DerivedState;