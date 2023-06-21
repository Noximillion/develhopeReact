// Add a side effect to the ClickCounter component from useState 01 that calls a onCounterChange function with the current value of the counter every time value of the counter changes. The function should be received as a prop.

import React, { useEffect, useState } from "react";

export function ClickCounter({initialVal = 0, funcToCall}) {

    const [count, setCount] = useState(initialVal)

    function handleIncrement() {
        setCount((count) => count + 1)
    }

    useEffect(() => {
        funcToCall(count)
    }, [count])

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={handleIncrement}>press to increment</button>
        </div>
    )
}