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

        item.value = '';
    }

    resetTodo = () => {
        this.setState({
            items:[]
        })
    }

    removeTodo = (val) => {
        this.setState({
            items:[this.state.items.filter((_, index) => index !== val)]
        })
    }

    render() {

        return (
            <div>
                <ul>
                    {this.props.render(this.state.items, this.removeTodo)}
                </ul>
                <input id='pippo' type='text'></input>
                <button type='button' onClick={this.addTodo}>add to list</button>
                <button type='button' onClick={this.resetTodo}>Empty the list</button>
            </div>
        )
    }
}