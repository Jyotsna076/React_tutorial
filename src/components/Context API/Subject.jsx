import { useContext } from "react"
import { SubjectContext } from "./ContextApiData"

export default function Subject() {
    const subject = useContext(SubjectContext)

    return(
        <div style={{backgroundColor: 'red', padding: '10px'}}>
            <h1>Subject Component : {subject}</h1>
        </div>
    )
}