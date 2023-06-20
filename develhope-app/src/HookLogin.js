// Rewrite the Login component as a function component, and use the useState hook to track the state of the username, password and remember inputs. Tip: you can use useState more than once.

import { useState } from "react"




export function Login() {

    const [info, setInfo] = useState({
        username: '',
        password: ''
    })

    function handleInputChange(event) {
        const{name, value} = event.target

        setInfo(info => {return {...info, [name]: value}})
    }

    function checkInfo() {
        const button = document.getElementById('buttonLog')

        if(info.username && info.password) {
            button.disabled = false
        } else {
            button.disabled = true
        }
    }

    return (
        <form onChange={checkInfo}>
            <input onChange={handleInputChange} value={info.username} name='username' />
            <input onChange={handleInputChange} value={info.password} name='password' type='password' />
            <button onChange={handleInputChange} id='buttonLog' disabled >login</button>
        </form>
    )
}