import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import logo from '../images.png';
import { connect } from 'react-redux';
class Home extends Component {
    //Using Axios to render the data

    // state = {
    //     posts : [ ]
    // }
    // componentDidMount () {
    //     axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
    //         console.log(res);
    //         this.setState ({
    //            posts: res.data.slice(0,5)
    //         })
    //     })
    //     .catch(error => {
    //         console.log("hjgkjg"+error.res)
    //     });
    // }
    render() {
        console.log(this.props);
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <img src={logo} className="logo_image" alt="logo1"></img>
                            <Link to='/todo'><button className="todo-button" >ToDo</button></Link>
                            <Link to={'/posts/' + post.id}>
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

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
//Connect Higher order component is Wrapping the Home Component
export default connect(mapStateToProps)(Home)