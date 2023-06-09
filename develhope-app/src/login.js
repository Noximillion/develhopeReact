import React from "react";

export class UncontrolledLogin extends React.Component {
        
    onLogin = (event) => {

        event.preventDefault()

        const username = document.getElementById('username')
        const password = document.getElementById('password')
        const button = document.getElementById('buttonLog')


        if(username.value && password.value){
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    }

    render() {
        return(
            <div>
                <form onChange={this.onLogin}>
                    <input id='username' name='username' />
                    <input id='password' name='password' type='password' />
                    <button id='buttonLog' type="submit"   disabled >Login</button>
                </form>
            </div>
        )
    }
}