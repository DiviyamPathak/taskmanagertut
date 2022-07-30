import React from 'react'
import PropTypes from 'prop-types'
import Task from './Task'
const Tasks = props => {
  return (
      <div>
        
       {props.db.map((task) => <Task task={task} key={task.id} delfunction={props.delfunction} togglerem={props.togglerem}/>)}
          
    </div>
  )
}

Tasks.propTypes = {
  tasknm:PropTypes.string,
  db:PropTypes.array,
  delfunction:PropTypes.func,
  togglerem:PropTypes.func
}

export default Tasks
