import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello World",
    };
    // this.HandleClick = this.HandleClick.bind(this);
  }

//   HandleClick() {
//     this.setState({
//       message: "Bye World",
//     });
//   }

     
  HandleClick=()=> {
    this.setState({
      message: "Bye World",
    });
  }
  render() {
    return (
      <div>
        {/* Ways for Binding Event
            1)Bind Mehod in event
            2)Array Function --Paranthesis is required in this approach
            3)Binding in the constructor (Officialy and Most used Binding Method)
            4)Using Funciton as Arrow function in Class
             */}
        <div>{this.state.message}</div> <br />
        {/* <button onClick={this.HandleClick.bind(this)}>Click Here</button> */}
        {/* <button onClick={()=>this.HandleClick()}>Click Here</button> */}
        <button onClick={this.HandleClick}>Click Here</button>
      </div>
    );
  }
}

export default EventBind;
