import React, { Component } from "react";

export default class SecondComponent extends Component {
  state = {
    name: "burger",
    counter: 0,
  };
  handleClick = (number) => {
    this.setState({ counter: this.state.counter + number });
  };
  render() {
    return (
      <div className="d-flex">
        <h3 className="m-2">{this.state.name}</h3>
        <button
          onClick={() => this.handleClick(-1)}
          className="btn btn-warning"
          disabled={this.state.counter === 0}
        >
          -
        </button>
        <div className="m-2">{this.state.counter}</div>
        <button onClick={() => this.handleClick(1)} className="btn btn-success">
          +
        </button>
        <button
          onClick={() => this.handleClick(10)}
          className="btn btn-success"
        >
          +10
        </button>
      </div>
    );
  }
}
