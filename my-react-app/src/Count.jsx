// import { useEffect, useState } from "react"

import { useEffect, useState } from "react"


// const Count = () => {
// let [count ,SetCount]=useState(0)
// let [city , SetCity]=useState('Bhopal')
//   useEffect(()=>{
//     console.log('hello');
//     fetch('https://dummyjson.com/users').then((res)=>{
//         return res.json()
//     }).then((data)=>{
//         console.log(data ,'hehehe')
//     })
//   },[count])
 
//   function fun1(){
// SetCount(count+1)
// }
// function done(){
// SetCity('Delhi')
// }
// return(
//     <div>
//      <h2>{count}</h2>
//      <button onClick={fun1}>Click</button>
//      <h2>{city}</h2>
//      <button onClick={done}>Change</button>
//     </div>
// )
// }
// export default Count




const Count = () => {
    let [ Api,SetApi]=useState([])

    useEffect(()=>{
        fetch('https://dummyjson.com/recipes').then((res)=>{
            return res.json()
        }).then((data)=>{
            SetApi(data.recipes)

        })
    },[])
    
        
    

  return (
    <div>
        {
            Api.map((val)=>{
                return(<>
                <h3>{val.id}</h3>
                <p>{val.name}</p>
              
                </>)
            })
        }
    </div>
  )
}

export default Count