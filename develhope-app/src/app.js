import React from "react";
import { List } from "./TodoList";

export class App extends React.Component {
    render() {
        return <List render={(items, removeTodo) => {
            return(
                <div>
                {items.map((item, index) => 
                    <li key={index}>
                        {item} 
                        <button onClick={() => removeTodo(index)}>Remove</button>
                    </li>)}
                </div>
            )
        }}/>
    }
}