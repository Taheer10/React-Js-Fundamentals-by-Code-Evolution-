import React, { Component } from 'react'

 class RefClasscomp extends Component {
     constructor(props) {
       super(props)
       
       this.inputRef = React.createRef()
     }

     FocusRefInput(){
         this.inputRef.current.focus()
     }
  render() {
    return (
      <input type="text" ref={this.inputRef} />
    )
  }
}

export default RefClasscomp