import React from "react";
import { AddMouseTracker } from "./MouseTrackerHOC"

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

        const [x, y] = this.props.position

        return(
            <div>
                <h3>Counter: {this.state.counter}</h3>
                <button onClick={this.incrementCounter}>Increment</button>
                Current position: {x}, {y}
            </div>
        )
    }
}

export default AddMouseTracker(Counter)