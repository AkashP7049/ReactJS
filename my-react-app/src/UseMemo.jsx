// import React, { useState } from 'react'

// const UseMemo = () => {
//     let [count ,setcount]=useState(0);
//     let a=Math.random(0)
//   return (
//     <div>
//         <h1>{a}</h1>
//         <h1>{count}</h1>
//         <button onClick={(()=>setcount(count+1))}>click</button>
//     </div>
//   )
// }

// export default UseMemo



// import React, {useMemo, useState } from 'react'

// const UseMemo = () => {
//     let [count ,setcount]=useState(0)
//     let cashedvalue=useMemo(()=>{
//         let result=0
//         function call(){
//             for(let i=0;i<10000000;i++){
//                 result+=i
//             }
//             return result
//         }
//         return call()

//     } ,[])
//   return (
//     <div>
//         <h1>{cashedvalue}</h1>
//         <h2>{count}</h2>
//         <button onClick={(()=>setcount(count+1))}>click</button>

//     </div>
//   )
// }

// export default UseMemo



import React, { memo, useEffect, useState } from 'react'
import "react-loading-skeleton/dist/skeleton.css";
const UseMemo = () => {
  let [loading,setloading]=useState(true);
    let [count , setcount]=useState(0)
    useEffect(()=>{
      setTimeout(()=>{
        setloading(false)
      },3000)
    },[])
    console.log('usememooo')
  return (
    <div>
      {loading ? (
        <p style={{height:'50px' , backgroundColor:'aliceblue' , display:'flex',alignItems:'center'}}>loading</p>
      ):(
        <div>
          <h1 style={{height:'50px' , backgroundColor:'aliceblue' , display:'flex',alignItems:'center'}}>Contend loaded</h1>
          </div>
      )}
        <button onClick={(()=>setcount(count+1))}>click</button>
        <h3>{count}</h3>
       <h1>usememooooooo</h1>
        <MemoChild/> 
    </div>
  )
}



const Child = () => {
    console.log('childdddddddd');
    
  return (
    <div>
        <h1>Childddddd</h1>
    </div>
  )
}
let MemoChild= memo(Child)


export default UseMemo

