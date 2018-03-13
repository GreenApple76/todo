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

  // did user type a character into the input box (if so update state)?
  handleChange(val) {
    console.log('change occured');
    console.log('val: ', val);
    this.setState({
        value: val
    });
}

  // add todo to the todo list, save to local storage
  addTodo(e) {
    e.preventDefault()
    let todo = { id: uuid(), 
                 todo: this.state.value
    };
    this.setState({ todoList: this.state.todoList.concat(todo)}, () => {
      localStorage.setItem('todoList', JSON.stringify(this.state.todoList));
    });
    
    console.log(this.state.todoList);
  }

  render() {
    return (
      <div className="App">
        <Title/>
        <AddToDo addTodo={this.addTodo} handleChange={this.handleChange} state={this.state}/>
        <ToDoList/>
      </div>
    );
  }
}

export default App;
