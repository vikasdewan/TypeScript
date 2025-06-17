import React, { type ChangeEvent } from 'react'
import { useState } from 'react'

const MyForm = () => {
    const [name , setName] = useState<string>("sir");
    const handleNameChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
        setName(e.target.value);
    }

const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
   e.preventDefault();
   console.log(e);  
}


  return (
    <div>
        <h2>{name}</h2>
        <label htmlFor="name"> Name </label>
        <input
         onChange={handleNameChange}
         type='text' 
         value={name}
         placeholder='enter your name'/>

<hr />  
     <form 
     onSubmit={handleSubmit}
     action="#">
   <button type='submit'>Submit</button>
     </form>

    </div>
  )
}

export default MyForm;