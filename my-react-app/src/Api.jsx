// import axios from 'axios';
// import { useState } from "react";
// import "./App.css";

// const Api = () => {
//     let [data,setData]=useState([]);
//     let [filter , setFilter]=useState("all");

//     async function call() {
//         try {
//           let apiData = await axios('https://dummyjson.com/recipes');
//           setData(apiData.data.recipes);
//         } catch (error) {
//           console.error("Error fetching data", error);
//         }
//       }
    
//       useEffect(() => {
//         call();
//       }, []);
    
//       const filteredData = data.filter((recipe) => {
//         if (filter === "all") return true;
//         return recipe.mealType.includes(filter); 
//       });
    
//   return (
//     <>
//     <div className="button-container">
//         <button onClick={()=> setFilter("Breakfast")}>Breakfast</button>
//         <button onClick={()=> setFilter("Lunch")}>Lunch</button>
//         <button onClick={()=> setFilter("Dinner")}>Dinner</button>
//         <button onClick={()=> setFilter("all")}>All</button>
//     </div>

//     <div className="recipe-container">
//         {
//           filteredData.length > 0 ? (
//             filteredData.map((recipe, index) => (
//               <div id='card' key={index}>
//                 <img src={recipe.image} alt={recipe.name} />
//                 <h3>{recipe.name}</h3>
//                 <p><strong>Calories per Serving:</strong> {recipe.caloriesPerServing}</p>
//                 <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes</p>
//                 <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
//                 <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
//                 <p><strong>Rating:</strong> {recipe.rating} ({recipe.reviewCount} reviews)</p>
//                 <p><strong>Meal Type:</strong> {recipe.mealType.join(", ")}</p>
//                 <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
//                 <p><strong>Instructions:</strong></p>
//                 <ol>
//                   {recipe.instructions.map((instruction, idx) => (
//                     <li key={idx}>{instruction}</li>
//                   ))}
//                 </ol>
//               </div>
//             ))
//           ) : (
//             <p>No recipes found for the selected category.</p>
//           )
//         }

//     </div>
//     </>
//   );
// }

// export default Api




// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import './App.css'
// const Api = () => {
//     let [data,SetData]=      useState([])
//       async function call(){
//        let apiData=  await axios('https://dummyjson.com/recipes')
//        SetData(apiData.data.recipes)
//        console.log(apiData.data.recipes.name,'isko dekho');
       
//     //    console.log(data,"koi mil gaya");
       
//     }
//     useEffect(()=>{
//         call()

//     },[])
  
//   return (
//     <>  
//     <button> dinnner</button>
//     <div>
       
//         {
//             data.map((a)=>{
//                 console.log(a,'kua hua ');
//                 // a.map((res)=>{
//                 //     console.log(res.name,'res')
//                 // })
                
//                 return(<>
//                 <div id='card'>  
               
//                    <img   src={a.image}/>
//                    <p>   {a.name}</p>
//                    </div>
//                 </>)
//             })
//         }
//     </div>
//     </>
//   )
// }

// export default Api




import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import './App.css';

const Api = () => {
  // State for storing data and filter type
  let [data, setData] = useState([]);
  let [filter, setFilter] = useState("all"); // State for tracking selected meal type

  // Fetch data from API
  async function call() {
    try {
      let apiData = await axios('https://dummyjson.com/recipes');
      setData(apiData.data.recipes);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }

  useEffect(() => {
    call();
  }, []);

  const filteredData = data.filter((recipe) => {
    if (filter === "all") return true;
    return recipe.mealType.includes(filter); 
  });

  return (
    <>
    
      <div className="button-container">
        <button onClick={() => setFilter("Breakfast")}>Breakfast</button>
        <button onClick={() => setFilter("Lunch")}>Lunch</button>
        <button onClick={() => setFilter("Dinner")}>Dinner</button>
        <button onClick={() => setFilter("all")}>All</button> {/* Show all */}
      </div>

  
      <div className="recipe-container">
        {
          filteredData.length > 0 ? (
            filteredData.map((recipe, index) => (
              <div id='card' key={index}>
                <img src={recipe.image} alt={recipe.name} />
                <h3>{recipe.name}</h3>
                <p><strong>Calories per Serving:</strong> {recipe.caloriesPerServing}</p>
                <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes</p>
                <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
                <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
                <p><strong>Rating:</strong> {recipe.rating} ({recipe.reviewCount} reviews)</p>
                <p><strong>Meal Type:</strong> {recipe.mealType.join(", ")}</p>
                <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
                <p><strong>Instructions:</strong></p>
                <ol>
                  {recipe.instructions.map((instruction, idx) => (
                    <li key={idx}>{instruction}</li>
                  ))}
                </ol>
              </div>
            ))
          ) : (
            <p>No recipes found for the selected category.</p>
          )
        }
      </div>
    </>
  );
}

export default Api;




// import { useState } from "react"

// const Api = () => {

//  let [bool,SetBool]=useState(false)
//  function change(){
//   if(bool===true){
//     SetBool(false)
//   }else{
//     SetBool(true)
//   }
//  }
//   return (
//     <div style={bool?{backgroundColor:'blue',height:'400px'}:{backgroundColor:'red',height:'400px'}}>
//     <button style={bool?{backgroundColor:'gray'}:{backgroundColor:'yellow'}}onClick={change} >Change</button>
//      </div>
//   )
// }

// export default Api






// import { useState } from "react"
// const Api = () => {
//   let [ city , Setcity]=useState('Indore');
// function done(){
//   const cities = ['delhi', 'mumbai', 'nagpur','Bhopal','narshinghpur'];
//     const currentIndex = cities.indexOf(city);
//     const nextIndex = (currentIndex + 1) % cities.length; // Loop back to the start
//     Setcity(cities[nextIndex]);
// }
//   return (
//     <div>
//       <h2>{city}</h2>
//       <button onClick={done}>click</button>
//     </div>
//   )
// }

// export default Api




// import { useState } from "react"


// const Api = () => {
//  let [data , setdata]=useState('')
//  function done(e){
//   setdata(e.target.value)
//  }
//   return (
//     <div>
//       <h1>{data}</h1>
//       <input onChange={done} type="text" placeholder="kuch bhe likho " />
//     </div>
//   )
// }

// export default Api