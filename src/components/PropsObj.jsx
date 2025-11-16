import Student from "./Student";
import Props from "./Props";
import { useState } from "react";

function PropObj(props) {
    console.log(props);
   //let name = "Jyotsna";
  // let age = 56;
  // let email = "jyotsna@gmail.com";
  let propObj = {
    name: "Jyotsna",
    age: 56,
    email: "jyotsna@gmail.com",
  };

  let propObj2 = {
    name: "peter",
    age: 65,
    email: "peter@gmail.com",
  };

  const [student,setStudent] = useState("Sam")

  return (
    <>  
        <h1>Name = {props.name[0]}</h1>
        <Props user={propObj}/>
        <Props user={propObj2}/>
        {student && <Student name={student} />}
        <button onClick={()=> setStudent("bhasker")}>Update student name</button>
        {/* <Props name = {name} age = {age} email={email}/> */}
    </>
  )
  
}

export default PropObj;
