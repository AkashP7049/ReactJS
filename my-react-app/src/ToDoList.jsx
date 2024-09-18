import { useState } from "react"


const ToDoList = () => {
    let [data,SetData]=useState([]);
    let [input,SetInput]=useState('');
    function fun1(a){
         SetInput(a.target.value)
    }
    function done(){
        SetData([...data,input])
        SetInput('')
    }
    function remove(id){
        let newDAta =data.filter((x,y)=>{
            return y!=id
        })
        SetData(newDAta)
    }
 return(
    <div>
      
        <h2>ToDo List</h2>
        <input value={input} onChange={fun1}/>
         <button onClick={done}> Done </button>
         {
            data.map((a,b)=>{
                return(<> 
                 <li>{a}</li>
                 <button onClick={()=>remove(b)}>Delete</button>
                </>)
            })
         }
    </div>
  )
}

export default ToDoList