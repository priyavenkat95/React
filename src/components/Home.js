import React, { Component } from 'react';
import axios from 'axios';
import './Home.css';
import {Link} from 'react-router-dom';
import logo from '../images.png';
class Home extends Component {
    state = {
        posts : [ ]
    }
    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            console.log(res);
            this.setState ({
               posts: res.data.slice(0,5)
            })
        })
        .catch(error => {
            console.log("hjgkjg"+error.res)
        });
    }
render () {
    const {posts} = this.state;
    const postList = posts.length ? (
        posts.map(post => {
            return (
                <div className="post card" key={post.id}>
                    <div className="card-content">
                        <img src={logo} className="logo_image"></img>
                        <Link to='/todo'><button className="todo-button" >ToDo</button></Link>
                        <Link to={'/posts/'+post.id}>
                        <span className="card-title">{post.title}</span>
                        </Link>
                        <p>{post.body}</p>
                    </div>
                </div>
            ) 
        })
    ) : (
        <div className="center">No Post Yet :(</div>
    )
    return (
        <div className="container">
            <h4 className="center">Home</h4>
            {postList}
        </div>
    )
}
}

export default Home