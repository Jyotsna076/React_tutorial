import { useState } from "react";
import "./Navbar.css";

function FormValidation() {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");

  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const handleName = (event) => {
    if (event.target.value.length > 5) {
      setNameErr("Please Enter Valid username. Only 5 characters allowed");
    } else {
      setNameErr("");
    }
  };

  const handlePassword = (event) => {
    let regex = /^[A-Z0-9]+$/i; 
    if (regex.test(event.target.value)) {
      setPasswordErr();
    } else {
      setPasswordErr("Please Enter Valid password. only number and alphabets");
    }
  };

  return (
    <>
      <h1>Form Validation</h1>
      <input
        type="text"
        className={nameErr ? "error" : ""}
        onChange={handleName}
        placeholder="Enter Name"
      />
      <span className="red-color">{nameErr && nameErr}</span>
      <br />
      <br />
      <input
        type="text"
        className={passwordErr ? "error" : ""}
        onChange={handlePassword}
        placeholder="Enter password"
      />
      <span className="red-color">{passwordErr && passwordErr}</span>
      <br />
      <br />
      <button disabled={passwordErr || nameErr}>Login</button>
    </>
  );
}

export default FormValidation;
