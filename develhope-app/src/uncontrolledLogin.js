import React from "react";

export class UncontrolledLogin extends React.Component {

    handleLogIn = (event) => {
        event.preventDefault()

        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const button = document.getElementById('buttonLog')
        
        // function checkInputs() {
            
        //     if(username == true && password == true) {
        //         button.disabled = false
        //     } else {
        //         button.disabled = true
        //     }
        // }

        console.log(
            username,
            password,
        )
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleLogIn}>
                    <input name='username' autoFocus/>
                    <input name='password' type='password' />
                    <button id='buttonLog' type="submit">Login</button>
                </form>
            </div>
        )
    }
}