import React from "react";

export class List extends React.Component {
    state = {
        items: ['mangiare', 'dormire', 'bere']
    }

    addTodo = () => {

        const item = document.querySelector('#pippo')

        this.setState({
            items:[...this.state.items, item.value]
        })

        item.value='';
    }

    render() {

        return (
            <div>
                <ul>
                {this.state.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <input id='pippo' type='text'></input>
                <button type='button' onClick={this.addTodo}>add to list</button>
            </div>
        )
    }
}