import React, { Component } from 'react'
import RefClasscomp from './RefClasscomp'

 class FocusRefInput extends Component {
     constructor(props) {
       super(props)
    
       this.componentRef = React.createRef()
     }
    
     clickHandler=()=>{
         this.componentRef.current.FocusRefInput()
          
        }
     

  render() {
    return (
     <div>


         <RefClasscomp ref={this.componentRef}/>
      <button onClick={this.clickHandler}>Click Here</button>


     </div>
    )
  }
}

export default FocusRefInput