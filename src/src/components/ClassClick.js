import React, { Component } from "react";

class ClassClick extends Component {
  HandleClick() {
    console.log("button has been Clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.HandleClick}> click Me</button>
      </div>
    );
  }
}

export default ClassClick;
