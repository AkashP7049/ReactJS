// import React, { useEffect, useState } from 'react'

// import './Home.css'
// const Food = ({apiData , cartData ,setcartData}) => {
//   console.log(setcartData,'kash aa jaye');
  
//  console.log(cartData,'dfgh');
  
//  const addToCart=(val)=>{
  
//   let filteredData=apiData.filter((a,id)=>{
//     return id===val
//   })
//   setcartData(filteredData)
//  }
//   return (
//     <div>
//        {                            
        
//             apiData.map((val,ind)=>{ 
//                 return(<>
//                   <div key={val.id} className='cart'> 
//                 <img src={val.image} alt={val.name} />
//                 <p>{val.name}</p>
//                 <button className='btn' onClick={()=>addToCart(ind)}>addToCart</button>
//                 </div>
//                 </>)
               
//             })
//         }
//     </div>
//   )
// }

// export default Food



import React, { useContext } from 'react';
import { Context, } from './Context';

const Food = ({ apiData,}) => {
  // console.log(SetCartData,"fun111");

  // let {distach}=    CartProvider
  // let [isTrue,]
      //  console.log(distach,'carrrr');
      let {dispatch,cart }=   useContext(Context)
      //  console.log( useContext(CartContext),"ye kiyaa");
      

        function isTrue(id){
          console.log(id,"heheh");
          
          return cart.some(cartItem => cartItem.id === id);
      
        }
    
        
        
  
        
         
  
  const addToCart = (val) => {
    console.log(val,"dekhoooooooo");
    


    dispatch({
      type:"add",
      payload:val
    })


  


    }
    function removeItem(val){
      dispatch({
        type:"remove",
        payload:val
      })

    // console.log(apiData,"heh");
    //       let filterData=apiData.filter((a,id)=>{
    //         return id===item
    //       })
    //       SetCartData(filterData)
    //       console.log(cartData,"dataa");
    // console.log(apiData,"don");
    
    // console.log(item,"eheheh");
    
    // console.log('gmmm');
    
    // console.log(item,"heheheheh");
    // console.log(cartData,"mujhe dekhoo"); 

    // setCartData([...cartData, item],'idherr');
   
    
    
    
    // Ceck if the item is already in the cart
    // const itemExists = cartData.find((cartItem) => cartItem.id === item.id);

  //   if (!itemExists) {
    
  //   } else {
  //     alert('Item already in cart');
  //   }
  };


  return (
    <div>
      {apiData.map((item,index) => (
        <div key={item.id} id='card'>
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>

          {isTrue(item.id) ? (
            <button onClick={ ()=>removeItem(item)} >Remove</button>
          ) : (
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          )}


           
       

        </div>
      ))}
    </div>
  );
};

export default Food;