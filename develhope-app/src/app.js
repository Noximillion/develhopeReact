import React from "react";
import { Welcome } from "./welcome";


export class App extends React.Component {
    render() {
        return <Welcome />
    }
}

// if no name is passed then it will print only the component as it is without the prop

