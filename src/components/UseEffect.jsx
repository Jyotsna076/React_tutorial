import { useEffect, useState } from "react";
function UseEffect() {
    const [counter, setCounter] = useState(0);
    const [data, setData] = useState(0);

    useEffect(() => {
        counterFunction();
    }, [counter])

    

    function counterFunction(){
        console.log("counter function", counter);
    }

    // function callOnce(){
    //     console.log("Function Called")
    // }

    

    return(
        <div className="container mt-5">
            <h1>UseEffect Component</h1>
            <button className="btn btn-secondary" onClick={() => setCounter(counter +1)}>Counter {counter}</button>
            <button className="btn btn-warning m-3" onClick={() => setData(data +1)}>Data {data}</button>
        </div>
    )
}

export default UseEffect;