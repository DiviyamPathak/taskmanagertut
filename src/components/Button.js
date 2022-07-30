import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
 
  return (
    <button onClick = {props.onclick}>
      
      <h3>{props.text}</h3>
    </button>
    
  )
}

Button.propTypes = {
    text:PropTypes.string,
    onclick:PropTypes.func
}

export default Button
