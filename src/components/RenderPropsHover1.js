import React, { Component } from 'react'

export class RenderPropsHover1 extends Component {
   
  render() {
      const{count,incrementCount}= this.props
     
        return <h1 onMouseOver={incrementCount}>Hovered {count} Times</h1>
    
  }
}

export default RenderPropsHover1