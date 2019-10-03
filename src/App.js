import React, { Component } from 'react';
// import Ninjas from './Ninjas';
import './App.css';
// import Todos from './Todos';
// import AddTodo from './AddTodo';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
// import Contact from './components/Contact';
import Post from './components/Post';
import Dumjson from './components/Dumjson';
import SuccessData from './components/SuccessData';
import ValidatedLoginForm from './components/ValidatedLoginForm';
import SearchBar from './components/SearchBar';
import Youtube from './apis/youtube';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
class App extends Component {
  state = { videos: [], selectedVideo: null };
  // state = {
  //   todos: [
  //     { id: 1, content: 'TodoList 1' },
  //     { id: 2, content: 'TodoList 2' },
  //     { id: 3, content: 'TodoList 3' }
  //   ]
  // }
  // deleteTodo = (id) => {
  //   const todos = this.state.todos.filter(todo => {
  //     console.log(todo.id, id);
  //     return todo.id !== id
  //   });
  //   this.setState({
  //     todos
  //   })
  //   console.log(todos);
  // }
  // addTodo = (todo) => {
  //   todo.id = Math.random();
  //   let todos = [...this.state.todos, todo];
  //   this.setState({
  //     todos: todos
  //   })
  // }
  componentDidMount() {
    console.log('component mounted');
    this.onTermSubmit(this.state.videos);
  }
  // componentDidUpdate(prevProps, prevState) {
  //   console.log('component updated');
  //   console.log(prevProps, prevState);
  // }
  onTermSubmit = async term => {
    console.log(term);
    const response = await Youtube.get('/search', {
      params: {
        q: term
      }
    });
    console.log(response.data.items);
    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };
  onVideoSelect = video => {
    console.log('From the App!', video);
    this.setState({ selectedVideo: video });
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

          <div className="ui container">

            <SearchBar onFormSubmit={this.onTermSubmit} />
            <div className="ui grid">
              <div className="ui row">
                <div className="eleven wide column">
                  <VideoDetail video={this.state.selectedVideo} />
                </div>
                <div className="five wide column">
                  <VideoList
                    videos={this.state.videos}
                    onVideoSelect={this.onVideoSelect}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div>
            <h1>Validated Login Form</h1>
            <ValidatedLoginForm />
          </div> */}
          {/* <div className="card todo-app">
            <h3 className="todohead">Todo's List</h3>
            <div>
            <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
            <AddTodo addTodo={this.addTodo} />
            </div>
          </div> */}

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
