import React from 'react'
import styled from 'styled-components'
import image from '../images/icon-cross.svg'
import img from '../images/icon-check.svg'
const Todo = ({todo,todos,setTodos,setShow}) => {
  const Delethandler =()=>{
    setTodos(todos.filter((el)=>el.id!==todo.id))
    if(todos.length<=1){
     setShow(false)
    }
  }
  const Checkbtn = ()=>{
    setTodos(todos.map(item=>{
      if(item.id===todo.id){
        return{
          ...item,
          completed:!item.completed,
        }
      }
      return item;
    }))
  }
  return (
    <Todostyle>
      <div className="light">
      <div className="inpt">
      <button onClick={Checkbtn} className={`check ${todo.completed? 'active':''}`}>
        <img src={todo.completed? img : '' } alt="" />
      </button>
      <p className={todo.completed? 'line-trough':''}>{todo.text} </p>
      </div>
      <button onClick={Delethandler} className='delete'><img src={image} alt="" /></button>
      </div>
    </Todostyle>
  )
}

export default Todo

const Todostyle = styled.div`
.light{
  display: flex;
align-items: center;
justify-content: space-between;
color: var(--Light-Grayish-Blue);
width: 400px;
min-height: 45px;
padding: 0.3rem 0.7rem;
border: none;
border-radius: 1px;
background-color: var(--Very-Dark-Desaturated-Blue);
border-bottom:1px solid var(--Very-Dark-Grayish-Blue);
cursor: pointer;
transition: var(--transition);
z-index: 100;
&:hover .delete{
opacity: 1;
}
}

.inpt{
  display: flex;
  align-items: center;
}
p{
    padding: 0rem 0.5rem;
}
.delete{
    background-color: transparent;
    border: none;
    cursor: pointer;
    opacity: 0;
}
.check{
  height: 1.2rem;
    width: 1.2rem;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
    border: 1px solid  var(--Very-Dark-Grayish-Blue) ;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    transition: var(--transition);
    margin-right: 1rem;
    &:hover{
        border-color: hsl(280, 87%, 65%);
    }
    img{
      /* display: flex;
    align-items: center;
    justify-content: center; */
    width: 0.6rem;
    }
}
.active{
 
 background: linear-gradient(to left,hsl(192, 100%, 67%), hsl(280, 87%, 65%));


}
.line-trough{
  text-decoration: line-through;
  color: var(--Light-Grayish-Blue);
  opacity: 0.5;

}
@media screen and (max-width:500px) {
.light{
  width: 330px;
}

}
`