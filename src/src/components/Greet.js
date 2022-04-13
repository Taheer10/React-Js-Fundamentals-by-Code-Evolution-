import React from 'react'


// function Greet(){
//     return <h1>Hello Hussain G</h1>;
// }

// export const Greet=()=><h1>Hello Tahir fsdf</h1>
//Destructuring props
//ways 1
//  const Greet=({name,heroName})=> {
 const Greet=(props)=> {
     //Way 2
     const{name,heroName}= props;

return (
    <>
    <h1>Hello {name} fan {heroName}</h1>
 
    
    </>
)

}



export default Greet;