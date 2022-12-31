import Form from './components/Form'
import Globalestyle from './Globalestyle'
import Todolist from './components/Todolist';
import { useState,useEffect } from 'react';
import { createContext } from 'react';
import { ThemeContext } from 'styled-components';
function App() {
  // Here is states
  const [input,setInput] =useState('')
  const [todos,setTodos] = useState([])
  const [show,setShow] = useState(false)
  const [status,setStatus] =useState('all')
  const [filtredtodos,setFiltredtodos] = useState([])
  // context state
  const [theme,setTheme] = useState('dark')
  const ToggleTheme = ()=>{
    setTheme(item=>item==='light'?'dark':'light')
  }
  
  useEffect(()=>{
    FilterHandler()
    Savelocalstorage()
  },[todos,status])
  useEffect(()=>{
    Getlocalstorage()
  },[])
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
  // save to localstorage

  const Savelocalstorage =()=>{
      localStorage.setItem('todos',JSON.stringify(todos))
  }
  const Getlocalstorage = ()=>{
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos',JSON.stringify([]))
    }else{
      let todolocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todolocal);
    }
   
  }
 
  return (
    <ThemeContext.Provider value={{theme,ToggleTheme}}>
      <div id={theme}>
      <Globalestyle/>
      <Form ToggleTheme={ToggleTheme} theme={theme} setShow={setShow} input={input} setInput={setInput} setTodos={setTodos} todos={todos} />
      <Todolist setFiltredtodos={setFiltredtodos} filtredtodos={filtredtodos} status={status} setStatus={setStatus} setShow={setShow} show={show} input={input} setInput={setInput} setTodos={setTodos} todos={todos}/>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
