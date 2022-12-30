import Form from './components/Form'
import Globalestyle from './Globalestyle'
import Todolist from './components/Todolist';
import { useState,useEffect } from 'react';
function App() {
  // Here is states
  const [input,setInput] =useState('')
  const [todos,setTodos] = useState([])
  const [show,setShow] = useState(false)
  const [status,setStatus] =useState('all')
  const [filtredtodos,setFiltredtodos] = useState([])
  useEffect(()=>{
    FilterHandler()
  },[todos,status])
// functions
  const FilterHandler = ()=>{
    switch(status){
      case 'completed':
        setFiltredtodos(todos.filter(todo=>todo.completed===true))
      break;
      case 'uncompleted':
        setFiltredtodos(todos.filter(todo=>todo.completed===false))
        break;
      default:
        setFiltredtodos(todos)
    }
  } 
 
  return (
    <div className="App">
      <Globalestyle/>
      <Form setShow={setShow} input={input} setInput={setInput} setTodos={setTodos} todos={todos} />
      <Todolist setFiltredtodos={setFiltredtodos} filtredtodos={filtredtodos} status={status} setStatus={setStatus} setShow={setShow} show={show} input={input} setInput={setInput} setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
