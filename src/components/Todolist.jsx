import React,{useState} from 'react'
import styled from 'styled-components'
import Todo from './Todo'
const Todolist = ({todos,setTodos,show,setShow,setStatus,status,filtredtodos,setFiltredtodos}) => {
const HandlerStatus = (e)=>{
   setStatus(e.target.value)
}
const Getit =()=>{
  setTodos([])
  setShow(false)
}
  return (
    <Todoliststyle>
      <div className="todo-list">
     <div className="container__todolist">
       {filtredtodos.map((todo)=>(
         <div className="td">
          <Todo className='hero' setShow={setShow} todos={todos} setTodos={setTodos} todo={todo} key={todo.id}/>
         </div>
       ))}
      
        { show &&
    <div className="active__completed">
        <small>{todos.length} items left</small>
        
        <section className='desk'>
            <option onClick={HandlerStatus} value="All">All</option>
            <option onClick={HandlerStatus} value="uncompleted">Active</option>
            <option onClick={HandlerStatus} value="completed">Completed</option>
        </section>
       
        <h4 onClick={Getit} >Clear All</h4>
    </div>
    }
   {show &&  <section className='section__mobile' >
            <option onClick={HandlerStatus} value="All">All</option>
            <option onClick={HandlerStatus} value="uncompleted">Active</option>
            <option onClick={HandlerStatus} value="completed">Completed</option>
        </section>
        }
     </div>
     </div>
    </Todoliststyle>
  )
}

export default Todolist

const Todoliststyle = styled.div`

.todo-list{
  background-color: var(--Very-Dark-Blue);
  min-height: 60vh;
display: flex;
align-items: flex-start;
justify-content: center;
padding-bottom: 4rem;
/* margin-top: -3rem; */

}
.active__completed{
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--Very-Dark-Desaturated-Blue);
    height: 40px;
    border-bottom-left-radius:3px;
    border-bottom-right-radius:3px;
    padding: 0 0.5rem;
    color: var(--Dark-Grayish-Blue);
  transition: var(--transition);

    small{
        font-size: 11px;
        font-weight: 400;
    }
    h4{
        font-size: 12px;
      cursor: pointer;
      font-weight: lighter;
      transition: var(--transition);
      font-weight: 400;
      &:hover{
        color: var(--Light-Grayish-Blue);
      }
    }
}
.section__mobile{
  display: none;
 
}
section{
    display: flex;
    font-size: 11px;
    gap: 10px;
    cursor: pointer;
    option{
    transition: var(--transition);
    font-weight: 700;
        &:hover{
        color: var(--Bright-Blue);
    }
    }
}
@media screen and (max-width:500px) {
.active__completed{
  width: 330px;
  transition: var(--transition);
}
.section__mobile{
  transition: var(--transition);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 330px;
  background-color: var(--Very-Dark-Desaturated-Blue);
    height: 40px;
    border-bottom-left-radius:3px;
    border-bottom-right-radius:3px;
    padding: 0 0.5rem;
    color: var(--Dark-Grayish-Blue);
    margin-top: 1rem;
}
.desk{
  display: none;
}

}
`