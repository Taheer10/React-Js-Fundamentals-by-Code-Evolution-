import React, { Component } from 'react'

 class ConditionalRender extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          isloggedin: false
       }
     }
  render() {
           
    //  case 1 -- varibale condotional
    // let message;
    //   if (this.state.isloggedin) {
    //       message=  <div>Welcome Tahir</div>
    //   }else{
    //    message = <div>Welcome Guest</div>
    //   }
    //   return message

    //case 2 --If else Conditional
    //   if (this.state.isloggedin) {
    //     return  <div>Welcome Tahir</div>
    // }else{
    //  return <div>Welcome Guest</div>
    // }

    //case 3 --Ternary Operator Conditional
    return this.state.isloggedin ?(
        <div>Welcome Tahir</div> 
    ): (
        <div>Welcome Guest</div>
        
    )
    
    
         //case 4 -- Short Circuit Operator
    //   return this.state.isloggedin && <div>Welcome Tahir</div>

    
     
    
  }
}

export default ConditionalRender