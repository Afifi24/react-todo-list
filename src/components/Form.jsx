import React from 'react'
import styled from 'styled-components'
import Light from '../images/icon-sun.svg'
import Dark from '../images/icon-moon.svg'
import DarkImage from '../images/bg-desktop-dark.jpg'
import LightImage from '../images/bg-desktop-light.jpg'
import hi from '../images/icon-moon.svg'
const form = ({input, setInput, setTodos, todos,setShow,theme,ToggleTheme}) => {
  const Addhandler = (e)=>{
    e.preventDefault()
    setTodos([...todos,
      { text:input, completed:false, id: Math.random()*1000}
    ])
    setInput('')
    setShow(true)
  }

  
  return (
    <Formstyle>
    <div className="bg__form"><img src={theme==='dark'?DarkImage:LightImage} alt="" /></div>
   <div className="form">
   <h1>Todo</h1>
     <img className='toggleimage' onClick={ToggleTheme} src={theme=='light'?Dark:Light} alt="" />
   </div>
    <form id='form'>
        <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Create a new todo...' />
        <button  onClick={Addhandler} type='submit'></button>
    </form>
    </Formstyle>        
  )
}

export default form

const Formstyle = styled.div`
/* background-color: lightblue; */
min-height: 40vh;
display: flex;
justify-content: flex-start;
align-items: center;
position: relative;
overflow: hidden;
flex-direction: column;
padding-bottom: 5rem;
.form{
    display: flex;
    align-items: center;
    width: 400px;
    justify-content: space-between;
    margin-top: 3rem;
    h1{
        font-size: 2.3rem;
        color: #fff;
        letter-spacing: 7px;
        text-transform: uppercase;
    }
   
}
.toggleimage{
  cursor: pointer;
}
.bg__form{
    width: 100%;
    bottom: 0;
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
    img{
        height: 100%;
        width: 100%;
    }
}
#form{
    margin-top: 2rem;
    width: 400px;
    display: flex;
    position: relative;
    input{
    width: 400px;
    height: 45px;
    padding: 0rem 1rem;
    border: none;
    outline: none;
    border-radius: 5px;
    background-color: var(--Very-Dark-Desaturated-Blue);
    ::placeholder{
        color: var(--Light-Grayish-Blue);
    }
    color: var(--Very-Light-Gray);
    }
    button{
    height: 20px;
    width: 2rem;
    font-size: 1.5rem;
    cursor: pointer;
    position: absolute;
    right: 1%;
    top: 30%;
    /* margin-top: 0.8rem; */
    background-color: transparent;
    border: none;
  }
    }
@media screen and (max-width:500px) {
  
  .form{
    width: 330px;
  }
  #form{
    align-items: center;
    justify-content: center;
    input{
      width: 330px;
    }
  }
}
`