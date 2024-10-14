// import New from "./New"




// const Home = (chota) => {
//   return (
//     <div>
        
//         <New d={chota.data} />
//     </div>
//   )
// }
  // export default Home 
 

//   import M from "./M"

// const Home = () => {
//   return (
//     <div>
//       <M/>
//       </div>
//   )
// }

// export default Home
  
// import { useReducer } from "react"
//   const Home = () => {
//     function reduser(count , action){
//       if(action.type==='incre'){
//        return count+=1
//       }
//       else if(action.type==='decre'){
//        return count-=1
//       }
//       else if(action.type==='reset'){
//        return 0
//       }
//       else{
//         return count
//       }
//      }
//      let [count,dispatch]=useReducer(reduser,0)
//      return (
//        <div> 
           
//          <h2 style={{color:'red'}}>{count}</h2>
//          <button style={{color:'purple'}} onClick={(()=>dispatch({type:'incre'}))}>++</button>
//          <button style={{color:'blue'}} onClick={()=>dispatch({type:'decre'})}>--</button>
//          <button style={{color:'green'}} onClick={(()=>dispatch({type:'reset'}))}>reset</button>
   
//          </div>
//      )
//   }
  
//   export default Home



// import { useReducer} from "react";

// const Home = () => {
//   function reduser(color , action){
//           if(action.type==='incre'){
//            return color='purple'
//           }
//           else if(action.type==='decre'){
//            return color='blue'         
//          }
//           else if(action.type==='reset'){
//            return color='green'
//           }
//           else{
//             return color
//           }
//         }
//         let [color,dispatch]=useReducer(reduser,'red');
//   return (
//     <div style={{backgroundColor:color,height:'200px'}}>
//       <h2 style={{color:'white'}}>{color}</h2>
//          <button style={{backgroundColor:'purple'}} onClick={(()=>dispatch({type:'incre'}))}>purple</button>
//           <button style={{backgroundColor:'blue'}} onClick={()=>dispatch({type:'decre'})}>blue</button>
//          <button style={{backgroundColor:'green'}} onClick={(()=>dispatch({type:'reset'}))}>green</button>
   
//     </div>
//   )
// }

// export default Home

import React, { useEffect, useState } from 'react'

import './Home.css'
import Food from './Food'
const Home = ({}) => {
  let [apiData,setapiData]=useState([])
  useEffect(()=>{
    fetch('https://dummyjson.com/recipes').then((res)=>{
      return res.json()
    }).then((data)=>{
     console.log(data.recipes);
     setapiData(data.recipes)
    })
  },[])
  
  return (
    <div>
     <Food apiData={apiData} />
     
    </div>
  )
}

export default Home