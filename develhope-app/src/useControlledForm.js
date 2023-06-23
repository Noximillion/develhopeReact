// Create a custom hook that keeps track of the state of a controlled form with the username and password inputs, and returns the current value of the inputs as well as an event handler to update either input.

import { useEffect, useState } from "react"


export function useControlledForm() {

    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')
    const [info, setInfo] = useState({
        username: '',
        password: '',
    })


    function handleInputChange(event) {
        const {name, value} = event.target

        setInfo(info => {return{...info, [name]: value}})
    } 
    // function handleNameChange(event) {
    //     const name = event.target.value
    //     setUsername(username => {return {...username, name}})
    // }

    // function handlePasswordChange(event) {
    //     const pass = event.target.value
    //     setPassword(password => {return {...password, pass}})
    // }

    // useEffect(() => {
    //     console.log(username)
    // }, [username])

    // useEffect(() => {
    //     console.log(password)
    // }, [password])

    useEffect(() => {
        console.log(info)
    }, [info])


    return {
        handleAll: handleInputChange,
        // handleName: handleNameChange,
        // handlePass: handlePasswordChange,
    }
}

/* le cose commentate erano test. Non riuscivo a farlo funzionare in una singola funzione, quindi ho cercato di lavorare prima con pezzi singoli e poi li ho messi insieme. Il che mi è stato utile, perché ho notato solo dopo che non stavo destrutturando anche l'event in HookLogin, quindi il valore che inserivo non veniva MAI preso */