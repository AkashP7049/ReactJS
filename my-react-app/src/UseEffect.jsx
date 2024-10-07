// import { useEffect, useState } from "react"



// const UseEffect = () => {
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

// export default UseEffect


import axios from "axios";
import { useEffect, useState } from "react"


const UseEffect = () => {
    let [data , setdata]=useState([])
    let [filter, setFilter] = useState("all");
    let[FilteredData,setFilteredData]=useState();

    async function call(){
        try {
            let apiData = await axios('https://dummyjson.com/users');
            setdata(apiData.data.users);
            console.log(apiData.data.users);
            
          } catch (error) {
            console.error("Error fetching data", error);
          }
        }
    
    useEffect(() => {
        call();
      }, []);
      
          const   filteredData=data.filter((users)=> {
                if (filter === "all")
                    { return true;
                    }
                else if(filter==='Green'){
                    return users.eyeColor==='Green'

                }
                else if(filter==='Red'){
                    return users.eyeColor==='Red'

                }
                else if(filter==='Violet'){
                    return users.eyeColor==='Violet'

                }
                else if(filter==='Hazel'){
                    return users.eyeColor==='Hazel'

                }
                else if(filter==='Brown'){
                    return users.eyeColor==='Brown'

                }
                else if(filter==='Gray'){
                    return users.eyeColor==='Gray'

                }
                else if(filter==='Amber'){
                    return users.eyeColor==='Amber'

                } 
                    
              });
              function done(id){
                let newData=filteredData.filter((c,d)=>{
                    // console.log(d!==id,'fghjk')
                    return d!==id

                })
                setdata(newData)
              }
  return (
    <>
    <div style={{backgroundColor:'red'}} >
        <h2> Select Eye Color Button</h2>
        <button style={{backgroundColor:'green'}} onClick={() => setFilter("Green")}>Green</button>
        <button style={{backgroundColor:'red'}} onClick={() => setFilter("Red")}>Red</button>
        <button style={{backgroundColor:'brown'}} onClick={() => setFilter("Brown")}>Brown</button>
        <button style={{backgroundColor:'#2c8da9'}} onClick={() => setFilter("Hazel")}>Hazel</button>
        <button style={{backgroundColor:'Violet'}} onClick={() => setFilter("Violet")}>Violet</button>
        <button style={{backgroundColor:'grey'}} onClick={() => setFilter("Gray")}>Gray</button>
        <button style={{backgroundColor:'#FFF8E1'}} onClick={() => setFilter("Amber")}>Amber</button>
        <button style={{backgroundColor:'#333'}} onClick={() => setFilter("all")}>All</button> {/* Show all */}
      </div>

    <div>
{
    filteredData.map((a,b)=>{
        return(
            
            <div  style={{display:"flex",justifyContent:'center'}}>
                <button style={{height:'30px'}} onClick={(()=>{done(b)})}>Delete</button>
               <img  height='230px' src={a.image} alt="" />
              <p > Name: "{a.firstName} {a.lastName}" bloodGroup: "{a.bloodGroup}" EyeColor: "{a.eyeColor}"</p> 
               
            </div>
        
            
        )
    })
}
    </div>
    </>
  )
}

export default UseEffect