import React from "react";

export class List extends React.Component {
    state = {
        items: ['mangiare', 'dormire', 'bere'],
    };

    addTodo = () => {

        const item = document.querySelector('#pippo')

        this.setState({
            items:[...this.state.items, item.value]
        })

        item.value = '';
    }

    resetTodos = () => {
        this.setState({
            items: [],
        });
    };

    removeLiItem = (event) => {

    const remove = event.target.id;

    this.setState({
        items: this.state.items.filter((el) => el !== remove),
        });
    };

    render() {
        return (
        <div>
            <ul>{this.props.render(this.state.items, this.removeLiItem)}</ul>
            <input type="text" id="pippo" />
            <button type='button' onClick={this.addTodo}>add to list</button>
            <button type='button' onClick={this.resetTodos}>Empty the list</button>
        </div>
        );
    }
}