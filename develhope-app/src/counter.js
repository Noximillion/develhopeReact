import React from "react";

export class Counter extends React.Component {

    state = {
        counter: 0
    }

    incrementCounter = () => {
        this.setState(state => {
            return {counter: state.counter + 1}
        })
    }
    
    render() {
        return(
            <div>
                <h3>Counter: {this.state.counter}</h3>
                <button onClick={this.incrementCounter}>Increment</button>
            </div>
        )
    }
}