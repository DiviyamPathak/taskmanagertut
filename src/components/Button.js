import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
 
  return (
    <button onClick = {props.onclick}>
      
      <h1>{props.text}</h1>
    </button>
    
  )
}

Button.propTypes = {
    text:PropTypes.string,
    onclick:PropTypes.func
}

export default Button
