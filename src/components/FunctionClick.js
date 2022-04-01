import React from 'react'

function FunctionClick() {

    const clickHandler=()=>{
     console.log('button Clicked');
    }

  return (
    <div className='body'>
        <p>Hello</p>
        <button onClick={clickHandler}>click</button>
    </div>
  )
}

export default FunctionClick