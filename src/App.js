
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState , useEffect} from 'react';
import Add from './components/Add';

function App() {
  let [db , setDb]= useState([])
    
  useEffect( ()=>{
    const gettasks = async ()=> {
      const datare = await fetchtasks()
      setDb(datare)
    }

   gettasks()
  },[])

  const fetchtasks = async ()=> {
    const data = await fetch("http://localhost:5000/tasks")
    const resdata = await data.json()
    return resdata 
  }

  const togglerem = async (id) => {
    const tasktobeupdated = await fetch(`http://localhost:5000/tasks/${id}`)
    const update = await tasktobeupdated.json()
    const oudated = {...update, reminder:!update.reminder}
    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'PUT',
      headers:{
        'Content-type':'application/json',
      },
      body:JSON.stringify(oudated)

    })

    const data = await res.json()

    
    setDb(db.map((task)=>task.id=== id ? {...task,reminder:data.reminder }: task))
    
  }
  
  const addtaskst = async (task) => {
    const res = await fetch('http://localhost:5000/tasks',{
      method:"POST",
      headers:{
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })
    const data = await res.json()
    setDb([...db, data])
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newtask = {id, ...taski}
    // setDb([...db, newtask])
  }
  
  const ondel = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'DELETE',
    })
    res.status === 200
      ? setDb(db.filter((task) => task.id !== id))
      : alert('Error Deleting This Task')
    //  setDb(db.filter(function (task) {
    //     return task.id !== id;
    //   }))
     
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
