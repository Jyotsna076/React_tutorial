import { useId } from "react";

export default function UseId() {
    return(
        <>
        <h1>useId Hook</h1>
        <UserForm />
        <hr />
        <UserForm />
        </>
    )
}


function UserForm() {
    const user = useId();
    
    return(
        <>
        <form action="">
            <label htmlFor={user+"name"}>Name: </label>
            <input type="text" id={user+"name"} placeholder="Enter Name" />
            <br /><br />
            <label htmlFor={user+"pass"}>Password: </label>
            <input type="text" id={user+"pass"} placeholder="Enter Password" />
            <br /><br />
            <label htmlFor={user+"skill"}>Skill: </label>
            <input type="text" id={user+"skill"} placeholder="Enter Skill" />
            <br /><br />
            <label htmlFor={user+"adress"}>Adress: </label>
            <input type="text" id={user+"adress"} placeholder="Enter Adress" />
            <br /><br />
            <label htmlFor={user+"term"}>Term and Condition: </label>
            <input type="checkbox" id={user+"term"}  />
        </form>
        </>
    )
}

 