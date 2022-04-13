import React, { Component } from "react";
import HIgherOrderCounter2 from './HIgherOrderCounter2'


 class HIgherOrderintro extends Component {
 
  render() {
    const { count,incrementCount } = this.props;

    return (
      <button onClick={incrementCount}>Clicked {count} Times</button>
    );
  }
}

export default HIgherOrderCounter2(HIgherOrderintro,8);
