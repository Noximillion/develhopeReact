import { useCounter } from "./useCounter"

export function HookCounter({initialValue, m, n}) {

    const {counter, increment, subtract, reset }=useCounter(initialValue, m, n)

    return (
        <div>
            <h5>Counter: {counter}</h5>
            <button onClick={increment}>add</button>
            <button onClick={subtract}>sub</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}