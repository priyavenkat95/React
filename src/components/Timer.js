
import React, { Component } from 'react';
import './Home.css';
import './Timer.css';
import Timercard from '../hoc/Timercard';
const nameText = [];
class Timer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    nameText.push(this.props.name)
    console.log(nameText);
    const postList = nameText.length ? (
      nameText.map((post, i) => {
        //  post.filter((item) =>{
          return (
            <div className="card dynamic-card"  key={i}>
              <h5>Hey {post}! Good morning</h5>
            </div>
          )
        // });

      })
    ) : (
        <div>No data</div>
      )
    return (
      <div>
        {postList}
      </div>
    )
  }
}

export default Timercard(Timer);