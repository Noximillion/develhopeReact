import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"

export function HookCardDetails({ initialVal={model:'Audi', year:'2000', color: 'black'}}) {

    const inputRefModel = useRef()
    const inputRefYear = useRef()
    const inputRefColor = useRef()

    useEffect(() => {
        inputRefModel.current.value = initialVal.model;
        inputRefYear.current.value = initialVal.year;
        inputRefColor.current.value = initialVal.color;
    }, [initialVal])

    return (
        <>
        <form action="/submit-form" method='POST'>
            <label for='model'>Modello</label>
            <input id='model' name='model' ref={inputRefModel}/>
            <br/>
            <label for='year'>Anno</label>
            <input id='year' name='year' ref={inputRefYear} />
            <br/>
            <label for='color'>Colore</label>
            <input id='color' name='color' ref={inputRefColor} />
            <input type='submit' value='submit'/>
        </form>
        <Link to="/">Go back</Link>
        </>
    )
}