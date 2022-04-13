import React from "react";

function Person({ person }) {
  return (
    <div>
      <h2>
        I am {person.Fname}, age is {person.Age} and my position is
        {person.psoition}
      </h2>
    </div>
  );
}

export default Person;
