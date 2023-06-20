import React from "react";
import { List } from "./TodoList";

export class App extends React.Component {
    render() {
        return (
            <div>
                <List render={(items, removeLi) => {
                    return (
                        <div>
                            {items.map((item) => (
                            <li id={item}>
                                {item}
                                <button id={item} onClick={removeLi}>
                                remove
                                </button>
                            </li>
                            ))}
                        </div>
                        )
                    }}
                ></List>
            </div>
        )
    }
}