import React from "react";
import { Welcome } from "./welcome";

export class InteractiveWelcome extends React.Component {

    state = {
        name: ''
    }

    InputInWelcome = (evt) => {
        this.setState({
            name: evt.target.value
        })
    }

    render() {
        return(
            <div>
                <input value={this.props.username} onChange={this.InputInWelcome}></input>
                <Welcome name={this.state.name}/>
            </div>
        )
    }
}