import { useEffect, useState } from "react";
import { useNavigate } from "react-router"
import "./FetchApi.css";

export default function UserList() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const url = "http://localhost:3000/users";
  useEffect(() => {
    setLoading(true);
    getUserData();
  }, []);

  const getUserData = async () => {
    let res = await fetch(url);
    res = await res.json();
    setUserData(res);
    setLoading(false);
  };

  const deleteUser = async(id) => {
    let response =  await fetch(url+"/"+id,{
      method: "delete"
    })
    response = await response.json()
    if(response){
      alert("response deleted")
      getUserData()
    }
    
  }

  const editUser = (id) => {
    navigate("/edit/"+id)
  }

  return (
    <>
      {/* <h1>Make Route and Pages for Add User and User List UI.</h1> */}

      <ul className="user-list user-list-header">
        <li>Name</li>
        <li>Age</li>
        <li>Email</li>
        <li>Id</li>
        <li>Action</li>
      </ul>

      {!loading ? (
        userData.map((user) => (
          <ul className="user-list" key={user.id}>
            <li>{user.name}</li>
            <li>{user.age}</li>
            <li>{user.email}</li>
            <li>{user.id}</li>
            <li>
              <button onClick={() => deleteUser(user.id)}>Delete</button>
              <button onClick={() => editUser(user.id)}>Edit</button>
            </li>
          </ul>
        ))
      ) : (
        <h4>Data Loading.....</h4>
      )}
    </>
  );
}
