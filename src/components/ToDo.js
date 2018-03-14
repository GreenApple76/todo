import React, { Component } from 'react';

class ToDo extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.state.todoList.map((todo) => {
                        return (
                            <li key={todo.id}>{todo.text}</li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default ToDo;