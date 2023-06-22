import { useCounter } from "./useCounter"

export function HookCounter() {

    const {counter, increment, subtract, reset }=useCounter(0, 1, 1)

    return (
        <div>
            <h5>Counter: {counter}</h5>
            <button onClick={increment}>add</button>
            <button onClick={subtract}>sub</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}