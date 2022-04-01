import React, { Component } from "react";

class Welcome extends React.Component {
  render() {
    const { name, heroName } = this.props;
    return (
      <>
        {/* <h2>Details{this.props.name} {this.props.heroName} </h2> */}

        {/* Destructuring props and state */}
        {/* const{state1,state2} = this.state */}
        <h2>
          Details{name} {heroName}{" "}
        </h2>

        {/* <h2>{this.props.children}</h2> */}
      </>
    );
  }
}

export default Welcome;
