// Rewrite the Counter component as a function component and add a side effect that initializes the interval as soon as the component renders, and clears it when the component unmounts.

import React, { useEffect, useState } from "react";

export function Counter({initVal = 0}) {

    const [count, setCount] = useState(initVal)

    function incrementCounter() {
        setCount(count => count + 1)
    }

    useEffect(()=> {
        console.log('i mount')
        const interval = setInterval(() => {
            setCount(count => count + 1)
        },1000);
        console.log(count)

        return() => {
            console.log('i unmount')
            clearInterval(interval)
        }
    })

    return(
        <div>
            <h3>Counter: {count}</h3>
            <button onClick={incrementCounter}>Increment</button>
        </div>
    )
}


