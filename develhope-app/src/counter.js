import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {

    state = {
        counter: this.props.initialVal,
    }

    constructor(props){
        super(props)

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