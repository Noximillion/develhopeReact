import React from "react";
import { Welcome } from "./welcome";


export class App extends React.Component {
    render() {
        return <Welcome name={<strong>J. R. R. Tolkien</strong>} />
    }
}

// per passarlo come jsx bisogna inserirlo fra le parentesi graffe, affinché venga interpretato come un jsx