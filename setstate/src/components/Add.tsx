import { useState } from "react"

export const Add = () => {
    const [counter, setCounter] = useState(0) 
     
    return (<>
        <button onClick={() => { setCounter(counter + 1) }}>Spara</button>
        <p>{counter }</p>
    </>)
}