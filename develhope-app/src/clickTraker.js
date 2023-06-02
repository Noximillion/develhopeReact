import React from "react";

export class ClickTraker extends React.Component {

    state = {
        button: ''
    }

    trackButton = (event) => {
        this.setState({
            button: event.currentTarget.innerText
        })
    }

    render() {
        return (
            <div>
                <h1>The last button pressed was {this.state.button}</h1>
                <button onClick={this.trackButton}>1</button>
                <button onClick={this.trackButton}>2</button>
                <button onClick={this.trackButton}>3</button>
            </div>
            
        )
    }
}