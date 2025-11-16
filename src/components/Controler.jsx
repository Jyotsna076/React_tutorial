import { useState } from "react";

function Controler () {
    const [name,setName] = useState("");
    const [password, setPassword] = useState("");
    const [email,setEmail] = useState("");
    return(
        <>
            <h1>Controler Component</h1>
            <form action="" method="get">
                <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter Name" /><br /><br />
                <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Enter password" /><br /><br />
                <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter email"/><br /> <br />
                <button>Submit</button>
                <button onChange={() => {setEmail(""); setName(""); setPassword("")}}>Clear</button>

                <h2>{name}</h2>
                <h2>{password}</h2>
                <h2>{email}</h2>
            </form>
        </>
    )
}

export default Controler;