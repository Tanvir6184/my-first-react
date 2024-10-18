import { useState } from "react"

export default function Counter(){

    const [count, setCount] = useState(0);

    const handleAdd = () =>{

        const increaseNumber = count + 1
        setCount(increaseNumber)

    }

    const handleReduce = ()=>{

        const decreaseNumber = count - 1;
        setCount(decreaseNumber);
    }

    return(
        <div style={{border: '4px solid pink'}}>
            <h3> Counter: {count} </h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}