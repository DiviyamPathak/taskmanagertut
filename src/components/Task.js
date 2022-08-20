import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
const Task = props => {
  let donei
  (props.task.reminder) ? donei = (<p>done </p>): donei= (<p>not done</p>)

  return (
    <div onDoubleClick={()=> props.togglerem(props.task.id)}>
        <h3>
          {props.task.text}

        </h3>
        <p>{props.task.day}</p>
        <Button text="x" onclick={()=> props.delfunction(props.task.id)}/>
        {donei}
    </div>
  )
}

Task.propTypes = {
  task:PropTypes.object,
  delfunction:PropTypes.func,
  togglerem:PropTypes.func
}

export default Task
