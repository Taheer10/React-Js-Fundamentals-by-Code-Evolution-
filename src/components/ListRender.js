import React from "react";
import Person from "./Person";

function ListRender() {
  const names = ["tahir", "baral", "dhaurali", "chari","baral"];
  const person = [
    {
      id: 1,
      Fname: "Cristiano  Dos Aveiro Ronaldo",
      Age: 37,
      psoition: "Center Forward",
    },
    {
      id: 2,
      Fname: "Eden Hazard",
      Age: 31,
      psoition: "Center Midfiled",
    },
    {
      id: 3,
      Fname: "Leonel Messi",
      Age: 34,
      psoition: "Center Forward",
    },
  ];

  //   const names = ["tahir", "baral", "dhaurali", "chari"];

  //   const namesList = names.map((name) => <h2>{name}</h2>);
  //Key must be unique and are not accessible in child's components
  // const PersonList = person.map((person) => (
  //   <Person key={person.id} person={person}></Person>
  // ));
  const nameList = names.map((name,index) => <h2 key={index}>{index}{name}</h2>);

  return <div>{nameList}</div>;
}

export default ListRender;
