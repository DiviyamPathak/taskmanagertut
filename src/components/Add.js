import React from 'react'
import PropTypes from 'prop-types'

const Add = props => {
  return (
   <form>
       <input type="text" id="task" name="taskname">Task</input>
       <label for="task">Enter a todo Task</label>
       <input type="text" id="daytime" name = "day"></input>
       <label for="daytime">enter a time for todo Task</label>
       <input type="checkboxM" id="reminder" name = "reminder">do yo want a reminder </input>
   </form>
  )
}

Add.propTypes = {

}

export default Add
