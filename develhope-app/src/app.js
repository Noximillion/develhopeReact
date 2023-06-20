import React from "react";
import { CounterUseState } from "./ClickCounter-useState";

export class App extends React.Component {

    render() {
        return (
            <div>
                <CounterUseState />
            </div>
        )
    }
}