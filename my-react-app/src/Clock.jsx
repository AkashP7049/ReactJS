import { useState } from "react"


const Clock = () => {
    let [time,setTimeout]=useState()
    setInterval(()=>{
        let samay = new Date().toLocaleTimeString()

        setTimeout(samay)
    })
  return (
    <div>
        <h1>{time}</h1>
        
    </div>
  )
}

export default Clock