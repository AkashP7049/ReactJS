
// import React, { useState } from 'react'

import { useReducer } from "react"

// const Foam = () => {
//   let [input,SetInput]=useState({
//     name:"",
//     email:"",
//     password:""

//   })


//   function fun1(e){
//     let {name,value}=   e.target
//     // console.log(e.target.value);
//     SetInput({...input,[name]:value})
//     // console.log(input,"dekhoo");

    
//   }

//   function done(e){
//     e.preventDefault()
//     console.log('heheheh',input);
   
    
//   }
//   return (
//     <div>
//     {/* <h1> Form</h1> */}

//      <fieldset>
//      <legend>Form</legend>
//     <form  onSubmit={done}> 
//       <input  type='text' name='name' value={input.name}   onChange={fun1}  placeholder='Enter your name'/>
//       <br></br>
//       <br></br>

//       <input  type='email' name='email' value={input.email}  onChange={fun1}  placeholder='Enter your email'/>
//       <br></br>
//       <br></br>

//       <input  type='password'  name='password'  value={input.password}  onChange={fun1} placeholder='Enter your passWord'/>
//       <br />
//       <br />
// <button  type='submit'> save</button>
//     </form>
//     </fieldset> 
//     </div>
//   )
// }




const Foam = () => {
  function reduser(count , action){
   if(action.type==='incre'){
    return count+=1
   }
   else if(action.type==='decre'){
    return count-=1
   }
   else{
    return count
   }
  }
  let [count,dispatch]=useReducer(reduser,0)
  return (
    <div> 
      <h2>{count}</h2>
      <button onClick={(()=>dispatch({type:'incre'}))}>++</button>
      <button onClick={()=>dispatch({type:'decre'})}>--</button>

    </div>
  )
}

export default Foam
