import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {

    state = {
        counter: this.props.initialVal,
    }


    componentDidMount() {
        setInterval(() => {
            this.setState((state) => {
                return {counter: state.counter + this.props.increment}
            })
        },this.props.interval)
    }

    render() {
        return <CounterDisplay displayCount={this.state.counter}/>
    }
}

// No, la funzione constructor non è più necessaria