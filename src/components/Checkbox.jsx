import { useState } from 'react';

function Checkbox() {
    const [skills, setSkills] = useState([]);
    const handleSkills = (event) => {
        if(event.target.checked){
            setSkills([...skills, event.target.value]);
        }else{
            setSkills([...skills.filter((item) => item != event.target.value)]);
        }
    }
    return (
        <>
            <h1>Select Your Skills</h1>
            <input type="checkbox" id="php" onChange={handleSkills} value="php"/> 
            <label htmlFor="php">PHP</label>
            <br /><br />
            <input type="checkbox" onChange={handleSkills} id="js" value="js"/> 
            <label htmlFor="js">JS</label>
            <br /><br />
            <input type="checkbox" onChange={handleSkills} id="node" value="node"/> 
            <label htmlFor="node">Node</label>
            <br /><br />
            <input type="checkbox" onChange={handleSkills} id="Java" value="Java"/> 
            <label htmlFor="Java">Java</label>

            <h1>{skills.toString()}</h1>
        </>
        
    )
}

export default Checkbox;