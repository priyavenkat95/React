
import React, { Component } from 'react';
import './Home.css';
import './Timer.css';
const textArray = ['eat', 'sleep', 'drink', 'snore', 'foo', 'buzz', 'whatever'];

class Timer extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 1500);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length];
    console.log(textThatChanges.length);
    return (
      <section>
        <h1>Hello, my name is Barry Allen</h1>
        <div className="card dynaTxt">
        <p className="red-text">I like to <span>{textThatChanges}</span></p>
        </div>
      </section>
    )
  }
}

export default Timer;