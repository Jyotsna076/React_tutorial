import { useState, useTransition } from "react";

function UseTrastion() {
    const [pending, startTrasition] = useTransition();

    const handleButton =() => {
        startTrasition( async() => {
             await new Promise(res => setTimeout(res, 2000))
        
        })
        
    }

    return (
        <>
        <h1>useTransition Hook in React Js</h1>
        {
            pending? 
            <img style={{width: "100px"}}  src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3h0dm85dnBxNGRnZGlodjg0ZzFoY3V4dTZtc3Z4dzZyd3ZvMWhtMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oEjI6SIIHBdRxXI40/giphy.webp" alt="" />
            : null
        }
        <button disabled={pending} onClick={handleButton}>Click</button>
        </>
    )
}

export default UseTrastion;