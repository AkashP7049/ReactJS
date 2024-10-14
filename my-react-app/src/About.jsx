// import { useEffect, useState } from "react"



// const About = () => {
//     let [count , setcount]=useState(0)
//     let [city , setcity]=useState('delhi')
//     useEffect(()=>{
//         fetch('https://dummyjson.com/users').then((res)=>{
//             return res.json()
//         }).then((data)=>{
//             console.log(data);
            
//         })
//     },[city])
//     function done(){
//         setcount(count+1)
//     }
//     function done1(){
//         const cities = ['delhi', 'mumbai', 'nagpur','Bhopal','narshinghpur'];
//     const currentIndex = cities.indexOf(city);
//     const nextIndex = (currentIndex + 1) % cities.length; // Loop back to the start
//     setcity(cities[nextIndex]);
//         // setcity('Bhopal')
        
//     }

//   return (
//     <div>
//         <h1>{count}</h1>
        
//         <button onClick={done}>click</button>
//         <h1>{city}</h1>
//         <button onClick={done1}>city</button>
//     </div>
//   )
// }

// export default About


// import React, { useState } from 'react'

// const About = () => {
//   let [color , setcolor]=useState('red')
//   function done1(){
//     const colors = ['blue', 'purple', 'orange','green','yellow'];
// const currentIndex = colors.indexOf(color);
// const nextIndex = (currentIndex + 1) % colors.length;
// setcolor(colors[nextIndex]);
   
    
// }
//   return (
//     <div style={{backgroundColor:color , height:'400px'}}>
//       <h1>AFROZ</h1>
//        <button onClick={done1}>color</button>
//     </div>
//   )
// }

// export default About


import React, { useState } from 'react'
import './About.css'
export const About = () => {
  let [count, setcount]=useState(0)
   
  const done=()=>{
    const value=event.target.value;
    setcount(value? parseInt(value):0);
  }
 const Card=Array.from({length:count})
  return (
    <div>
     
        <h1>Card</h1>
        <div className='cart0'>
        <input onChange={done} type="number" min='1 ' />
        <div className='cart-con'> 
        {Card.map(( _,b)=>(
       <div key={b} className='card2'>
        card{b+1}
       </div>
        ))}
        </div>
        </div>
        
     
    </div>
  )
}
export default About