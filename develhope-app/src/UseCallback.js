// Modify the useCounter custom hook from Custom Hooks 01 to use the useCallback to memorize the functions used to increment, decrement and reset the counter.
import { useCallback, useState } from "react"

export function useCounter(initialValue, m, n) {
    const [count, setCount] = useState(initialValue)

    const handleIncrement = useCallback(function addOne() {
        setCount(count => count + m)
    }, []);
    const handleDecrement = useCallback(function subOne() {
        setCount(count => count - n)
    }, []);
    const handleReset = useCallback(function resetCount() {
        setCount(initialValue)
    }, []);

    return {
        counter: count,
        increment: handleIncrement,
        subtract: handleDecrement,
        reset: handleReset,
    }
}

