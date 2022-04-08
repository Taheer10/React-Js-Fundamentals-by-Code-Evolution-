import React, { Component } from 'react'
import LIfecycleB from './LifecycleB'

  //using the same methods for updating components for practice

 class LIfecycleA extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          name : 'tahir'
       }
       console.log('Constructor')
     }


    //  static getDerivedStateFromProps(props,state){
    //     console.log('getDerivedStateFromProps')
    //     return null;
    //  }
     
     static getDerivedStateFromProps(props,state){
        console.log('getDerivedStateFromProps updating component A')
        return null;
     }
     
      shouldComponentUpdate(){
        console.log('shouldComponentUpdate updating component A')
        return true;
          
      }

      getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('getSnapshotBeforeUpdate updating component A')
        return null;

      }

      componentDidUpdate(){
        console.log('componentDidUpdate updating component A')
          
      }

    //  componentDidMount(){
    //     console.log('componentDidMount A')
         
    //  }

    changeState=()=>{
        this.setState({
            name : 'Eden Hazard'
        })
    }

  render() {
    console.log('Render A')

    return (
        
      <div>    
          <div><LIfecycleB/></div>      
          LIfecycleA
          <button onClick={this.changeState}>Change State</button>
        </div>
    )
  }
}

export default LIfecycleA