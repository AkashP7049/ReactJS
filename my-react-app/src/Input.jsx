import { useState } from "react"


const Input = () => {
    let [data,SetData]=useState('kuch bhe likhoo')
    function fun1(e){
        SetData(e.target.value)
    }
 return (
    <div>
        <h2>{data}</h2>
        <input onChange={fun1} placeholder='Enter your name'/>
    </div>
  )
}

export default Input