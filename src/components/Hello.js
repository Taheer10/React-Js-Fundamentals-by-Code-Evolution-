import React from "react";

const Hello = () => {
  // return (
  //     <h1>Hello Hussain</h1>
  // )

  return React.createElement(
    "div",
    {
      id: "hello", className: 'dummyclass'
    },
    React.createElement("h1", null, "Hello Tahir")
  );
};

export default Hello;
