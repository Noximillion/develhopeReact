import React from 'react';
import { Counter } from './counter';


export class App extends React.Component{
    render() {
        return <Counter initialVal={2} increment={3} interval={2000}/>
    }
} 