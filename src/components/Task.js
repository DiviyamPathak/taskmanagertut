import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
const Task = props => {
  return (
    <div onClick={()=> props.togglerem(props.task.id)}>
        <h3>
          {props.task.text}

        </h3>
        <p>{props.task.day}</p>
        <Button text="x" onclick={()=> props.delfunction(props.task.id)}/>
    </div>
  )
}

Task.propTypes = {
  task:PropTypes.object,
  delfunction:PropTypes.func,
  togglerem:PropTypes.func
}

export default Task
