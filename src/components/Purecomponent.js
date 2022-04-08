import React, { PureComponent } from 'react'

export class Purecomponent extends PureComponent {
  render() {
      console.log('pure comp render')
    return (
      <div>
          Purecomponent {this.state.name}
      </div>
    )
  }
}

export default Purecomponent