import React, { Component } from 'react';
import Title from './components/Title';
import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';
import uuid from 'uuid';

// does a todo list already exist?
if (localStorage.getItem('todoList') !== null) {
  var todoList = JSON.parse(localStorage.getItem('todoList'));
}

class App extends Component {
  constructor(props) {
  super(props);
  // set initial state to the todoList from local storage if it exists
  this.state = todoList ? { todoList: todoList } : { todoList: [] };
  this.handleChange = this.handleChange.bind(this);
  this.addTodo = this.addTodo.bind(this);
  }

  // updates state when user types a character into the input box
  handleChange(inputValue) {
    this.setState({
        value: inputValue
    });
}

  // add todo to the todo list, save to local storage
  addTodo(e) {
    e.preventDefault()
    // do not add empty todo tasks
    if (this.state.value !== '') {
      let todo = { id: uuid(), 
                  text: this.state.value
      };
      this.setState({ todoList: this.state.todoList.concat(todo)}, () => {
        localStorage.setItem('todoList', JSON.stringify(this.state.todoList));
        this.setState({ value: ''}); // clear input textbox
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Title/>
        <AddToDo addTodo={this.addTodo} handleChange={this.handleChange} state={this.state}/>
        <ToDoList state={this.state}/>
      </div>
    );
  }
}

export default App;
