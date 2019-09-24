
import React, { Component } from 'react';
import './Home.css';
import './Timer.css';
import { Link } from 'react-router-dom';
import Timercard from '../hoc/Timercard';
import { PacmanLoader } from 'react-spinners';
import { css } from '@emotion/core';
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
    }
  }
  render() {
    nameText.push(this.props.name);
    const uniqueNames = nameText.filter((val, id) => {
      return nameText.indexOf(val) == id;
    });
    const postList = uniqueNames.length ? (
      uniqueNames.map((post, i) => {
        return (
          <div  key={i}>
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
              <Link to={'/view'}><button className="success-data">Hurray!!! Completed</button></Link>
            </div> : null}
          </div>
        )
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