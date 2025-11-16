import { useState } from "react";

function Input () {
    const [val, setVal] = useState("John Doe");
    return(
        <>
            <h1>Get Input Feild Value</h1>
            <input type="text" value={val} onChange={(event)=> setVal(event.target.value)} placeholder="Enter your Name"/>
            <h1>{val}</h1>
            <button onClick={() => setVal("")}>Clear</button>
        </>
    )
}

export default Input;