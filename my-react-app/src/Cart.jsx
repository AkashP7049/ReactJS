// import React from 'react'
// import './Cart.css'
// const Cart = ({cartData}) => {

  
//   return (
//     <div >
//          <h2>Cart Items</h2>
//       {cartData.length > 0 ? (
//         cartData.map((val, ind) => (
//           <div key={ind} className='cart1'>
//             <img src={val.image} alt={val.name} />
//             <p>{val.name}</p>
//           </div>
//         ))
//       ) : (
//         <p>No items in the cart</p>
//       )}
//         </div>
//   )
// }

// export default Cart



import React, { useContext } from 'react';
import { Context } from './Context.jsx';
import './App.css'
const Cart = ({  }) => {
  // console.log(cartData,"hello ");
   let {cart}=   useContext(Context)
   console.log(cart,"context");
   
  
  return (
    <div>
      <h2>Cart Items</h2>
      {cart.length > 0 ? (
        cart.map((val, ind) => (
          <div key={ind} className='cart1'>
            <img src={val.image} alt={val.name} />
            <p>{val.name}</p>
          </div>
        ))
      ) : (
        <p>No items in the cart</p>
      )}
    </div>
  );
};

export default Cart;