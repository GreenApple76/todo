import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title/>
        <AddToDo/>
        <ToDoList/>
      </div>
    );
  }
}

export default App;
