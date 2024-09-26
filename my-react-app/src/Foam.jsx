
import React, { useState } from 'react'

const Foam = () => {
  let [input,SetInput]=useState({
    name:"",
    email:"",
    password:""

  })


  function fun1(e){
    let {name,value}=   e.target
    // console.log(e.target.value);
    SetInput({...input,[name]:value})
    // console.log(input,"dekhoo");

    
  }

  function done(e){
    e.preventDefault()
    console.log('heheheh',input);
   
    
  }
  return (
    <div>
    {/* <h1> Form</h1> */}

     <fieldset>
     <legend>Form</legend>
    <form  onSubmit={done}> 
      <input  type='text' name='name' value={input.name}   onChange={fun1}  placeholder='Enter your name'/>
      <br></br>
      <br></br>

      <input  type='email' name='email' value={input.email}  onChange={fun1}  placeholder='Enter your email'/>
      <br></br>
      <br></br>

      <input  type='password'  name='password'  value={input.password}  onChange={fun1} placeholder='Enter your passWord'/>
      <br />
      <br />
<button  type='submit'> save</button>
    </form>
    </fieldset> 
    </div>
  )
}

export default Foam