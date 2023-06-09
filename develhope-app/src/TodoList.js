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
    }

    resetTodo = () => {
        this.setState({
            items:[]
        })
    }

    removeTodo = (val) => {
        
        // const itemToRemove = event.currentTarget
        const filteredArray = this.state.items.filter((item => item !==val ))
        // const filteredArray = this.state.items.filter((el) => { 
        //     return el !== event.target.item
        // })
        this.setState({
            items: filteredArray
        })
    }

    render() {

        return (
            <div>
                <ul>
                {this.state.items.map((item) => <li key={item}>
                        {item} 
                        <button type='button' onClick={() => this.removeTodo(item)}>Remove</button>
                    </li>)}
                </ul>
                <input id='pippo' type='text'></input>
                <button type='button' onClick={this.addTodo}>add to list</button>
                <button type='button' onClick={this.resetTodo}>Empty the list</button>
            </div>
        )
    }
}