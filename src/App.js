import Button from './components/Button';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import Add from './components/Add';

function App() {
  let [db , setDb]= useState([
    {
    "id": 1,
    "text": "Doctors Appointment",
    "day": "Feb 5th at 2:30pm",
    "reminder": true
        },
    {
    "id": 2,
    "text": "Meeting at School",
    "day": "Feb 6th at 1:30pm",
    "reminder": true
        }
  ])
    
  const togglerem = (id) => {
    setDb(db.map((task)=> task.id === id ?{...task,reminder:!task.reminder}:task ))
    
  }
  
  const addtaskst = (taski) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newtask = {id, ...taski}
    setDb([...db, newtask])
  }
  
  const ondel = (id) => {
    setDb(db.filter((task)=>task.id !== id))
     
  }
  return (
    <div className="App">
      <Header name ="Task manager"/>
      <Add onAdd={addtaskst}/>
      <Tasks db={db} delfunction={ondel} togglerem={togglerem}/>
    </div>
  );
}

export default App;
