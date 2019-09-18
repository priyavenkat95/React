import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
class Post extends Component {
    componentDidMount() {
        console.log(this.props.post);
    }
    handleClick = () => {
        this.props.deletePost(this.props.post.title);
        this.props.history.push('/home');
    }
    // state = {
    //     post : null
    // }
    // componentDidMount (){
    //     let id = this.props.match.params.post_id;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/'+ id).then(res => {
    //         this.setState({
    //             post: res.data
    //         })
    //     })
    //     // this.setState ({
    //     //     id1 : id
    //     // })
    // }
    render() {
        console.log(this.props);
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>Delete Post</button>
                </div>
            </div>
        ) : (
                <div className="center">Loading Post...</div>
            )
        return (
            <div className="container">
                {post}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find((post) => {
            return post.id == id
        })
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (title) => { dispatch({ type: 'DELETE_POST', title: title }) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post)