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
import Dumjson from './components/Dumjson';
import SuccessData from './components/SuccessData';
import ValidatedLoginForm from './components/ValidatedLoginForm';
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
    console.log(todos);
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
            <Route path="/login" component={ValidatedLoginForm} />
            <Route path="/json" component={Dumjson} />
            <Route path="/posts/:post_id" component={Post} />
            <Route path="/view" component={SuccessData} />
          </Switch>
          {/* <div>
            <h1>Validated Login Form</h1>
            <ValidatedLoginForm />
          </div> */}
          <div className="card todo-app">
            <h3 className="todohead">Todo's List</h3>
            <div>
            <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
            <AddTodo addTodo={this.addTodo} />
            </div>
          </div>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
