import {lazy, Suspense, useState } from "react";
//import LazyLoadingUser from "./LazyLoadingUser";
const LazyLoadingUser = lazy(() => import('./LazyLoadingUser'))

function LazyLoading() {
    const [load, setLoad] = useState(false)
    return (
        <>
            <h1>Lazy Loading</h1>
            <button onClick={() => setLoad(true)}>Load User</button>
            {
                load? <Suspense fallback={<h3>Loading....</h3>}><LazyLoadingUser /></Suspense> :null
            }

            
        </>
    )
}

export default LazyLoading;