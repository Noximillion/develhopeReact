// Rewrite the ClickCounter component as a function component, and use the useState hook to track the state of the counter.


import { useState } from "react";

export function CounterUseState({initialVal = 0}) {

    const [count, setCount] = useState(initialVal)

    function handleIncrement() {
        setCount((count) => count + 1)
    }

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={handleIncrement}>press to increment</button>
        </div>
    )
}