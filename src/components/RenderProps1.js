import React, { Component } from 'react'

export class RenderProps1 extends Component {
  
  render() {
      const{count,incrementCount} = this.props
     
        return   <button onClick={incrementCount}>Click {count} times</button>
    
  }
}

export default RenderProps1