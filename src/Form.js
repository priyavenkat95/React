import React, { Component } from 'react';
import './Form.css';
class Form extends Component {

    state = {
        name: null,
        email: null,
        password: null,
        phone: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="formList">
                <form onSubmit={this.handleSubmit} className="formData">
                    <div className="form_title">
                        <h2>REGISTRATION FORM</h2>
                    </div>
                    <div>
                        <label>Name:</label>
                        <input type="text" id="name" onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="text" id="email" onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" id="password" onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Re-Password:</label>
                        <input type="password" id="password" onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Phone Number:</label>
                        <input type="number" id="phone" onChange={this.handleChange}></input>
                    </div>
                    <button className="button">Submit</button>
                </form>
            </div>
        );
    }
}

export default Form