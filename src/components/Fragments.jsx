import { Fragment } from "react"

export default function Fragments() {
    return(
        <Fragment>
            <Data />
            <Data />
            <Data />
            <Data />
            <Data />
        </Fragment>
    )
}

function Data() {
    return(
        // <> </> is a short syntax for <Fragment></Fragment>
        <>
            <h1>This is a fragment tag</h1>
            <h1>This is a fragment tag</h1>
        </>
    )
}