import React from 'react';
const textArray = ['Alex', 'Camran', 'Bruce', 'Nix', 'Aleo', 'Rano', 'Lilee'];

const TimerCard = (WrappedComponent) => {
    // const colors = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
    // const randomColor = colors[Math.floor(Math.random() * 5)];
    // const className = randomColor + '-text';
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = { textIdx: 0 };
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

        render() {
            let textThatChanges = textArray[this.state.textIdx % textArray.length];
            return (
                <div>
                    {/* <div className={className}> */}
                    <WrappedComponent {...this.props} name={textThatChanges} />
                </div>
            )
        }
    }
}

export default TimerCard

