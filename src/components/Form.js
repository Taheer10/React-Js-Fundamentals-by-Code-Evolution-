import React, { Component } from 'react'

 class Form extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          username : '',
          comments : '',
          footballer: 'Eden'
       }
     }
      
     //Change or Write
     changeHandler=(event)=>{
         this.setState({username : event.target.value})
     }
      //Change or Write
     changeTextArea=(event)=>{
        this.setState({comments : event.target.value})
    }

    //Select 
    selectPlayer=(event)=>{
        this.setState({footballer : event.target.value})
    }

    handleSubmit =(event)=>{
       alert(`${this.state.username}  ${this.state.comments} ${this.state.footballer}`)
          event.preventDefault(); //Prevents the form to go back to default state i.e refresh(clear)
    }


  render() {

    //Destrucing can be used for this.state
     const {username, comments, footballer} = this.state

    return (
      <form onSubmit={this.handleSubmit}>
     <div>
         <label >UserName</label>
         {/* Before Destructuring value={this.state.username} */}
         <input type="text" value={username} onChange={this.changeHandler} />
     </div>
      
      <div>
          <label>Comments</label>
          <textarea value={comments} onChange={this.changeTextArea} cols="30" rows="10"></textarea>
      </div>

      <div>
          <label>Footballer</label>
          <select value={footballer} onChange={this.selectPlayer} >
           
           <option value="Ronaldo">CR7</option>
           <option value="Messi">LM10</option>
           <option value="Eden">ED10</option>

          </select>
      </div>

      <button type='submit'>Submit</button>

      </form>
    )
  }
}

export default Form