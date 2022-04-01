import React from 'react'
import './myStyle.css'

function Stylesheet(props) {
    let ClassName = props.primary ? 'primary' : '' 
  return (
    <h1 className={`${ClassName} font-xl`}>Stylesheet</h1>
  )
}

export default Stylesheet