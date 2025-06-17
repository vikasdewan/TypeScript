import React from 'react';
 
import { useCounter } from '../provider/Counter';
interface MyButtonProps {
    text:string | number;
    onClick ?: () => void;
}

 

const MyButton : React.FC<MyButtonProps> = (props) =>{
     const context = useCounter()
    return (
        <>
         <h1 onClick={e => context?.setCount(context?.value +1)}>{context?.value}</h1>
        </>
    )
}
 
export default MyButton;