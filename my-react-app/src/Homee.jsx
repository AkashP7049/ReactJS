import { useContext } from "react"
import { Context } from "./ToDoListContext"



const Homee = () => {

  let {dispatch,input,arrData }=   useContext(Context)
  console.log(input,'dfghj');
   function fun(e){
  dispatch({
    type:'addIn',
    payload:e.target.value
  })
}
  function done(){
    dispatch({
    type:'addTodo',
    payload:input
  })
}

  return (
    <div>
      <h1>ToDoList</h1>
      <input value={input}  onChange={fun}/>
      <button onClick={done}>add</button>
      {
            arrData.map((a,b)=>{
                return(<> 
                 <li>{a}</li>
                 <button onClick={done}>Delete</button>
                </>)
            })
         }
    </div>
  )
}

export default Homee



// import React from 'react'

// const Homee = () => {
//   return (
//     <div>Homee</div>
//   )
// }

// export default Homee