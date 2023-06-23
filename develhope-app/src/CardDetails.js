// Create a CarDetails uncontrolled form
// that uses the HTML Form API
// to allow the user to insert details about a car, such as the model, the year and the color.
// Allow the form to receive a initialData prop that contains the default values of each input,
// and reset the form every time the initialData value changes.

import { useEffect, useRef } from "react"

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
        </>
    )
}