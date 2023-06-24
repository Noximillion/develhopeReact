import { useEffect, useState } from "react";
import { HookCounter } from "./counter";

export function App() {

    const [numbers, setNumbers] = useState({
        plus: 1,
        minus: 1,
        reset: 0,
    })

    function handleChange(event) {
        const {name, value} = event.target

        setNumbers((numbers) => {
            return {
                ...numbers,
            [name]:value
            }
        })
    }

    console.log(numbers)

    return (
        <div>
            <HookCounter initialValue={numbers.reset} m={numbers.plus} n={numbers.minus}/>
            <input type='number' name='plus' style={{width:'32px'}} value={numbers.plus} onChange={handleChange}/>
            <input type='number' name='minus' style={{width:'32px'}} value={numbers.minus} onChange={handleChange}/>
            <input type='number' name='reset' style={{width:'32px'}} value={numbers.reset} onChange={handleChange}/>
        </div>
    )
}