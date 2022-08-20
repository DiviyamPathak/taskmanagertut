import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

const Add = props => {
    const [text,setTasks] = useState()
    const [day,setDay] = useState()
    const [reminder,setReminder] = useState(false)

    const onSubmit = (e)=>{
        e.preventDefault()
        if(!text){
            alert("add task then submit")
        }

        props.onAdd({text,day,reminder})
        setTasks("")
        setDay("")
        setReminder(false)
    }
   
  return (
   <form onSubmit={onSubmit} >
       <div>
       <label >Enter a todo Task
       <input type="text" id="task" name="taskname" value={text} onChange={(e)=>{setTasks(e.target.value)}} />
       </label>
       <label >enter a time for todo Task
       <input type="text" id="daytime" name = "day" value={day} onChange={(e)=>{setDay(e.target.value)}}/>
       </label>
       <input type="checkbox" id="reminder" name = "reminder" value={reminder} onChange={(e)=>{setReminder(e.currentTarget.checked)}}/>
       <input type="submit" value="save"/>
       </div>
       
   </form>
  )
}

Add.propTypes = {
    onAdd:PropTypes.func,
}

export default Add
