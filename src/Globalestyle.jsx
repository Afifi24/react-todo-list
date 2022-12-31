import { createGlobalStyle } from "styled-components";


const Globalstyle = createGlobalStyle`


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:root{
--Bright-Blue: hsl(220, 98%, 61%);
/* light theme */

--Very-Light-Gray: hsl(0, 0%, 98%);
--Very-Light-Grayish-Blue: hsl(236, 33%, 92%);
--Light-Grayish-Blue: hsl(233, 11%, 84%);
--Dark-Grayish-Blue: hsl(236, 9%, 61%);
--Very-Dark-Grayish-Blue: hsl(235, 19%, 35%);

/* dark theme */

--Very-Dark-Blue: hsl(235, 21%, 11%);
--Very-Dark-Desaturated-Blue: hsl(235, 24%, 19%);
--Light-Grayish-Blue: hsl(234, 39%, 85%);
--Light-Grayish-Blue-hover: hsl(236, 33%, 92%);
--Dark-Grayish-Blue: hsl(234, 11%, 52%);
--Very-Dark-Grayish-Blue: hsl(233, 14%, 35%);
--Very-Dark-Grayish-Blue: hsl(237, 14%, 26%);

/* font-size */
--size:18px;
/* transition */
--transition:500ms;

body{
    font-family: 'Josefin Sans', sans-serif;
    
    z-index: -1;
#light #form input{
    background-color: var(--Very-Light-Grayish-Blue);
    color: var(--Very-Dark-Grayish-Blue);
    ::placeholder{
        color: var(--Very-Dark-Grayish-Blue);
    }
}
#light .active__completed{
    background-color: #fff;
   color: var(--Dark-Grayish-Blue);
   box-shadow: 2px 2px 20px rgba(0,0,0,0.1);
   

}
#light .light{
     background-color: #fff;
     box-shadow: 5px 0px 20px rgba(0,0,0,0.1);
    color: var(--Very-Dark-Grayish-Blue);
    border-bottom:1px solid var(--Light-Grayish-Blue);
    
}
#light .line-trough{
    color: var(--Dark-Grayish-Blue);
}
#light .todo-list{
    background-color: #fff; 
}
#light .section__mobile{
    background-color: #fff;
   color: var(--Dark-Grayish-Blue);
   box-shadow: 2px 2px 20px rgba(0,0,0,0.1);
}
}


}


`
export default Globalstyle