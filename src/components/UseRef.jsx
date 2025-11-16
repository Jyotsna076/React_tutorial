import { useRef } from "react";

function UseRef() {
    const inpRef = useRef(null);
    const inpHandler = () => {
        console.log(inpRef);
        inpRef.current.focus();
        inpRef.current.style.color='red';
        inpRef.current.placeholder='Enter password';        
    }

    const toggleHandler = () => {
        if( inpRef.current.style.display != 'none'){
            inpRef.current.style.display = 'none';
        } else{
            inpRef.current.style.display = 'inline'
        }
    }

    return(
        <>
          <h1>UseRef Component.</h1>
          <button onClick={toggleHandler}>Toggle</button>
          <input ref={inpRef} type="text" placeholder="Enter user name" />
          <button onClick = {inpHandler}>Focus on input feild</button>
        </>
    )
}

export default UseRef;