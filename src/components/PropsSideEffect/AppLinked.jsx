import { useState } from "react";
import First from "./First";


function AppLinked() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(0);
    const [display, setDisplay] = useState(true)
    return (
        <div className="container">
            {
                display? <First count={count} data={data} />: null
            }
            <button onClick={() => setCount(count + 1)} className="btn btn-secondary">Counter</button>
            <button onClick={() => setData(data + 1)} className="btn btn-danger m-3">Data</button>
            <button onClick={() => setDisplay(!display)} className="btn btn-dark m-3">Toggle</button>
        </div>
    )
}

export default AppLinked;