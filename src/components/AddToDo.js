import React, { Component } from 'react';

class AddToDo extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    

  

    render() {
        return (
            <div>
                <form onSubmit={this.props.addTodo}>
                <input id="add-todo" type="text" name="task" value={this.props.state.value} onChange={(e) => { console.log('e: ', e.target.value); this.props.handleChange(e.target.value)}}/>
                <button>+</button>
                </form>
            </div>
        );
    }
}

export default AddToDo;