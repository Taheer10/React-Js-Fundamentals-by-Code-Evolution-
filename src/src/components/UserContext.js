import React from "react";

// const UserContext = React.createContext('name'); --it is used for passing default value
const UserContext = React.createContext();


const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export  {UserProvider,UserConsumer}
export default UserContext