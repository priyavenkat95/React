import React, { Component } from 'react';
// import Ninjas from './Ninjas';
import './App.css';
import Todos from './Todos';
import AddTodo from './AddTodo';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';
class App extends Component {

  state = {
    todos: [
      { id: 1, content: 'TodoList 1' },
      { id: 2, content: 'TodoList 2' },
      { id: 3, content: 'TodoList 3' }
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      console.log(todo.id, id);
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
  }
  componentDidMount() {
    console.log('component mounted');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('component updated');
    console.log(prevProps, prevState);
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar className="col-lg-4" />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/posts/:post_id" component={Post} />
          </Switch>
          <div className="todo-app">
            <h1 className="center blue-text">Todo's List</h1>
            <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
            <AddTodo addTodo={this.addTodo} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
