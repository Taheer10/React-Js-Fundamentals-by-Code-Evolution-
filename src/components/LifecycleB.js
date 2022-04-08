import React, { Component } from 'react'
  
  //using the same methods for updating components for practice
 class LIfecycleB extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          name : 'tahir'
       }
       console.log('Constructor B')
     }


    //  static getDerivedStateFromProps(props,state){
    //     console.log('getDerivedStateFromProps B');
    //     return null;
    //  }
     
     static getDerivedStateFromProps(props,state){
        console.log('getDerivedStateFromProps Updating COmpomemt B');
        return null;
     }

     getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('getSnapshotBeforeUpdate Updating COmpomemt B');
        return null;

       
     }

     componentDidUpdate(){
        console.log('componentDidUpdate Updating COmpomemt B');

     }
     
    //  componentDidMount(){
    //     console.log('componentDidMount B')
         
    //  }

  render() {
    console.log('Render B')

    return (
        
      <div>          
          LIfecycleB
        </div>
    )
  }
}

export default LIfecycleB