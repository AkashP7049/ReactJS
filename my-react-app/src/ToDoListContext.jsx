import { createContext, useReducer } from "react";

export const Context=  createContext()
let data={
    input:'',
    arrData:[ ]
}
function reduser(state , action){
    if(action.type==='addIn'){
        return {
            ...state,input:action.payload
          
        }
    }
    else  if(action.type==='addTodo'){
        return  {
            ...state,
            input:'',
            arrData:[...state.arrData,action.payload]
        } 

    }
    else{
        return state
    }
}

const 
DataProvider=(({children})=>{


const [state , dispatch]=useReducer(reduser, data)
return(
    <Context.Provider value={{input:state.input,arrData:state.arrData,dispatch}}>
        {children}
    </Context.Provider>
)
})
export default DataProvider