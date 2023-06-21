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