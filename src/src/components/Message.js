import React, { Component } from "react";

class Message extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
    };
  }

  changeText() {
    this.setState({
      message: "Thank you for Subscription",
    });
  }
  render(props) {
    return (
      <>
        <h1 className="Pagetitle">{this.state.message}</h1>
        <button className="click" onClick={() => this.changeText()}>
          Subscribe
        </button>
      </>
    );
  }
}

export default Message;
