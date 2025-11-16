import useCustomToggle from "./CustomToggle";

function CustomHook() {
    const [value, toggleval] = useCustomToggle(true);
    const [data, setData] = useCustomToggle(true);

    return(
        <>
            <button onClick={toggleval}>Toggle heading</button>
            <button onClick={() => toggleval(false)}>Hide heading</button>
            <button onClick={() => toggleval(true)}>Show heading</button>
            {
              value? <h1>Custom Hook in React js</h1>:null 
            }
            <hr />

            <button onClick={setData}>Toggle heading</button>
            <button onClick={() => setData(false)}>Hide heading</button>
            <button onClick={() => setData(true)}>Show heading</button>
            {
                data? <h2>Second Heading</h2>:null
            }
            
        </>
    )
}

export default CustomHook;

//import this file in App.jsx