
import React, { Component } from 'react';
import './Home.css';
import './Timer.css';
import { PacmanLoader } from 'react-spinners';
import { css } from '@emotion/core';
import SuccessData from './SuccessData';
const nameText = [];
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    color: green;
`;
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloading: true,
      show: false,
      textArray: ['Alex', 'Camran', 'Bruce', 'Nix', 'Aleo', 'Rano', 'Lilee'],
      textIdx: 0,
    }
  }
  showTable = () => {
    this.setState({
      show: true
    });
  }
  componentDidMount() {
    this.timeout = setInterval(() => {
        let currentIdx = this.state.textIdx;
        this.setState({ textIdx: currentIdx + 1 });
    }, 1500);
}
componentWillUnmount() {
    clearInterval(this.timeout);
}
deletedatas = (post_arr,i) => {
/*   console.log("deleted", post_arr.indexOf());
  console.log(i);
  console.log(post_arr)
      if (post_arr.indexOf() !== i){
      console.log(post_arr);
      post_arr = post_arr.splice(i,1);
          console.log(post_arr);
      } */
      if(this.name && this.name.length > 0){
        this.name = this.name.splice(i,1);
        const data = [];
        data = this.name;
        this.setState({
          textArray: data
        })
      }
      console.log(this.name,post_arr)
      
}
  render() {
    let textThatChanges = this.state.textArray[this.state.textIdx % this.state.textArray.length];
    nameText.push(textThatChanges);
    const uniqueNames = nameText.filter((val, id) => {
      return nameText.indexOf(val) == id;
    });
    const postList = uniqueNames.length ? (
      <div >
        {this.state.show == true ? (<SuccessData {...this.props} name={uniqueNames} deleteData={this.deletedatas}></SuccessData>) : (
          uniqueNames.map((post, i) => {
            return (
              <div key={i}>
                <div className={i == (uniqueNames.length - 1) && ((uniqueNames.length - 1) < 6) ? 'navigation-active' : 'navigation-inactive'}>
                  <div className="card">
                    <h6 className="arr-data">Hey {post}! Good morning
              {i == (uniqueNames.length - 1) && ((uniqueNames.length - 1) < 6) ?
                        <div className='sweet-loading'>
                          <PacmanLoader
                            css={override}
                            sizeUnit={"px"}
                            size={15}
                            color={'#C62828'}
                            isLoading={this.state.loading}
                          />
                        </div> : null}
                    </h6>
                  </div>
                </div>
                {i === 6 ? <div>
                  <button className="success-data" onClick={this.showTable}>Hurray!!! Completed</button>
                </div> : null}
              </div>
            )
          })
        )}
      </div>
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

export default Timer;