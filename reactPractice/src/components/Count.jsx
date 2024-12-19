
import { useState } from "react"

function Count() {

    let [count,setCount]=useState(0)
    function handleIncrease() {
        setCount(++count)
        
    }
    function handleDecreese() {
        if(count>=0){
            
            setCount(count--)
        }
        
    }    
    function handleReset() {
        setCount(count=0)
        
    }
    return (
        <>
            <button onClick={handleDecreese}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleReset}>reset</button>
        </>
    )
}

export default Count