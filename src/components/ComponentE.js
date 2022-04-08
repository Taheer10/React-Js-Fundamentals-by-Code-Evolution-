import React, { Component } from "react";
import ComponetF from "./ComponetF";
import UserContext from "./UserContext";

class ComponentE extends Component {
  //It only works with class Component
  static contextType = UserContext;
  render() {
    return (
      <div>
        Componet E Context {this.context}
        <ComponetF />
      </div>
    );
  }
}
//Another way of passing value

export default ComponentE;
