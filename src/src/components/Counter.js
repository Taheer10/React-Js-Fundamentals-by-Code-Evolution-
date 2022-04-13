import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    // this.setState({ count: this.state.count + 1 }, () => {
    //   console.log("call back", this.state.count);
    // });
     
    this.setState((prevState)=> ({
        count : prevState.count +1
    }))

  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  incrementFive(){
     this.increment();
     this.increment();
     this.increment();
     this.increment();
     this.increment();

  } 

  render() {
    return (
      <div>
        <div> Count = {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>increment</button>
        <button onClick={() => this.decrement()}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
