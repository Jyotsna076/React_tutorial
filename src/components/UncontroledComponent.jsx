import { useRef } from "react";

function UncontroledComponent() {
    const handleForm = (event) => {
        event.preventDefault();
        const user = document.querySelector("#User").value;
        const password = document.querySelector("#password").value;
        console.log(user, password);
    }
    //use useRef
    const userRef = useRef()
    const passwordRef = useRef()

    const handleFormRef = (event) => {
        event.preventDefault();
        const user =  userRef.current.value
        const password =  passwordRef.current.value
        console.log(user,password);
        
    }
    return(
        <>
            <h1>UnControled Component</h1>
            <form action="" method="post" onSubmit={handleForm}>
                <label htmlFor="name">User Name: </label>
                <input type="text" id="UserRef" placeholder="Enter user name"/>
                <br /> <br />
                <label htmlFor="password">Password: </label>
                <input type="password" id="passwordRef" placeholder="Enter password"/>
                <br /> <br />
                <button>Submit</button>
            </form>
            <hr />

            <h1>Uncontroled component with useRef</h1>
            <form action="" method="post" onSubmit={handleFormRef}>
                <label htmlFor="name">User Name: </label>
                <input type="text" ref={userRef} id="User" placeholder="Enter user name"/>
                <br /> <br />
                <label htmlFor="password">Password: </label>
                <input type="password" ref={passwordRef} id="password" placeholder="Enter password"/>
                <br /> <br />
                <button>Submit with ref</button>
            </form>
            
        </>
    )
}

export default UncontroledComponent;