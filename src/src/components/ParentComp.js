import React, { Component } from "react";
import MemoComp from "./MemoComp";
import Purecomponent from "./Purecomponent";
import RegComp from "./RegComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "tahir",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Hussain Tahir",
      });
    }, 2000);
  }

  render() {
    return (
      <div>
        ParentComp
        {/* <RegComp/>
      <Purecomponent/> */}
      </div>
    );
  }
}

export default ParentComp;
