// import { createContext } from "react";

//  let Context=  createContext()

//  export default Context


import { Children, createContext ,useReducer } from "react";
export const Context= createContext();
let data={
    cart:[]
}

function reduser(state , action){
    if(action.type==='add'){
        return {
            ...state,cart:[...state.cart,action.payload]
          
        }
    }
    else  if(action.type==='remove'){
        return  {
            ...state,cart:[...state.cart.filter((a,b)=>b!==action.payload.id)]
        } 

    }
    else{
        return state
    }
}


    const CartProvide=({children})=>{

const [state , dispatch]=useReducer(reduser , data);

return (
    <Context.Provider value={{cart:state.cart , dispatch}}>
     {children}
    </Context.Provider>
)
};
export default CartProvide