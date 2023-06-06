import React from "react";

export class Login extends React.Component {

    state = {
        username: '',
        password: '',
    }

    onLogin = (event) => {
        event.preventDefault()

        const name = event.target.name
        const val = event.target.value
        this.setState({
            [name]: val
        })

        const button = document.querySelector('#buttonLog')

        if(this.state.username && this.state.password) {
            button.disabled = false
        } else {
            button.disabled = true
        }
    }

    render() {
        return(
            <div>
                <form>
                    <input name='username' onChange={this.onLogin} />
                    <input name='password' type='password' onChange={this.onLogin} />
                    <button id='buttonLog' type="submit" onChange={this.onLogin} disabled>Login</button>
                </form>
            </div>
        )
    }
}