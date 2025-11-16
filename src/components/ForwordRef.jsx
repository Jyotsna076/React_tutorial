//import this file in App.js

import { useRef } from "react";
import UserForwordRef from "./UserForwordRef";

function  ForwordRef() {
    const inputRef = useRef();
    const updateInput = () => { 
        inputRef.current.value = 1000;
        inputRef.current.focus();
        inputRef.current.style.color = "red";
    }
    return (
        <>
            <h1>Forword Ref</h1>
            <UserForwordRef ref={inputRef}/>
            <button onClick={updateInput}>Update input feild</button>
        </>
        
    )
}


export default ForwordRef;