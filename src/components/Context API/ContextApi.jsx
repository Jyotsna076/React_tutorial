import { useState } from "react";
import College from "./College";
import { SubjectContext } from "./ContextApiData";

function ContextApi() {
    const [subject, setSubject] = useState("")
    return (
        <div style={{backgroundColor: 'yellow', padding: '10px'}}>
            <SubjectContext.Provider value={subject}>
                <select value={subject} onChange={(event) => setSubject(event.target.value)}>
                    <option value="">Select subject</option>
                    <option value="Maths">Maths</option>
                    <option value="Hindi">Hindi</option>
                    <option value="English">English</option>
                    <option value="History">History</option>
                </select>
                <h1>Context API</h1>
                <button onClick={() => setSubject('')}>Clear Subject</button>
                <College />
            </SubjectContext.Provider>
        </div>
    )
}

export default ContextApi;

//import this in App.jsx 