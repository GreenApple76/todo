import React, { Component } from 'react';
import ToDo from './ToDo';

class ToDoList extends Component {
    render() {
        return (
            <ToDo state={this.props.state}/>
        );
    }
}

export default ToDoList;