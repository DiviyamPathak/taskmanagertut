import Button from './components/Button';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
function App() {
  
  const onclick = () => {
    console.log("Helllo")
  }
  return (
    <div className="App">
        <Tasks tasknm="do this"/>

      <Header name ="Task manager"/>
      <Button text="submit" onclick={onclick} />
    </div>
  );
}

export default App;
