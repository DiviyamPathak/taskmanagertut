import React from 'react'
import PropTypes from 'prop-types'

const Tasks = props => {
  return (
      <div onClick={()=> console.log("div tasks component ckicked")}>
          <h1>{props.tasknm}</h1>
          <button >
              del 
          </button>
    </div>
  )
}

Tasks.propTypes = {
  tasknm:PropTypes.string
  
}

export default Tasks
