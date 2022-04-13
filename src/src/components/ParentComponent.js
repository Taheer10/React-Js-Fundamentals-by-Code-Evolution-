import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Parentmessage: "Parent",
    };
    this.ClickHandler = this.ClickHandler.bind(this);
  }

  //  ClickHandler(){
  //      alert(`Helo ${this.state.Parentmessage}`)
  //  }

  ClickHandler(childName) {
    alert(`Helo ${this.state.Parentmessage} from ${childName}`);
  }
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.ClickHandler} />
      </div>
    );
  }
}

export default ParentComponent;
