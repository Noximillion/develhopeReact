// Create a custom hook useCounter that keeps track of the state of a counter, and returns the current value of the counter as well as three functions to increment, decrement and reset the counter

import { useState } from "react"

export function useCounter(initialValue, m, n) {
    const [count, setCount] = useState(initialValue)

    function addOne() {
        setCount(count => count + m)
    }

    function subOne() {
        setCount(count => count - n)
    }

    function resetCount() {
        setCount(initialValue)
    }

    return {
        counter: count,
        increment: addOne,
        subtract: subOne,
        reset: resetCount,
    }
}

