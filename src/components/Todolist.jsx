import React,{useState} from 'react'
import styled from 'styled-components'
import Todo from './Todo'
const Todolist = ({todos,setTodos,show,setShow,setStatus,status,filtredtodos,setFiltredtodos}) => {
const HandlerStatus = (e)=>{
   setStatus(e.target.value)
}
  return (
    <Todoliststyle>
     <div className="container__todolist">
       {filtredtodos.map((todo)=>(
         <Todo className='hero' setShow={setShow} todos={todos} setTodos={setTodos} todo={todo} key={todo.id}/>
       ))}
      
        { show &&
    <div className="active__completed">
        <small>5 items</small>
        
        <section >
            <option onClick={HandlerStatus} value="All">All</option>
            <option onClick={HandlerStatus} value="completed">Completed</option>
            <option onClick={HandlerStatus} value="uncompleted">Uncompleted</option>
        </section>
       
        <h4 >Clear completed</h4>
    </div>
    }
     </div>
    </Todoliststyle>
  )
}

export default Todolist

const Todoliststyle = styled.div`
min-height: 60vh;
display: flex;
align-items: flex-start;
justify-content: center;
padding-bottom: 4rem;
box-shadow: 10px 10px 20px rgba(0,0,0,0.7);
.active__completed{
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--Very-Dark-Desaturated-Blue);
    height: 45px;
    border-bottom-left-radius:3px;
    border-bottom-right-radius:3px;
    padding: 0 0.5rem;
    color: var(--Dark-Grayish-Blue);
    small{
        font-size: 12px;
    }
    h4{
        font-size: 12px;
      cursor: pointer;
      font-weight: lighter;
      transition: var(--transition);
      &:hover{
        color: var(--Light-Grayish-Blue);
      }
    }
}
section{
    display: flex;
    font-size: 12px;
    gap: 10px;
    cursor: pointer;
    option{
    transition: var(--transition);
    font-weight: 400;
        &:hover{
        color: var(--Bright-Blue);
    }
    }
}
@media screen and (max-width:500px) {
.active__completed{
  width: 340px;
}

}
`