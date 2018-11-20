import React, { Component } from "react";

export default class CountDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.count,
      interval: null
    };
  }

  componentDidMount() {
    this.handleCountDown();
  }

  handleCountDown() {
    clearInterval(this.state.interval);
    const interval = setInterval(() => {
      this.setState({
        time: this.state.time - 1
      });
      if (this.state.time <= 0) {
        clearInterval(this.state.interval);
      }
    }, 1000);
    this.setState({interval})
  }

  reStart() {
    this.setState({
      time: this.props.count
    });
    this.handleCountDown();
  }

  render() {
    return (
      <div>
        <h1
          style={{ fontSize: "6em", textAlign: "center", marginTop: "100px" }}
        >
          {this.state.time}
        </h1>
        <button
          style={{
            background: "lightblue",
            border: "none",
            padding: "10px 40px",
            margin: "40px auto",
            display: "block",
            fontSize: "1.3em"
          }}
          onClick={() => this.reStart()}
        >
          Again
        </button>
      </div>
    );
  }
}
