import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import Contact from './Contact.jsx'
import CartProvider from './Context.jsx'

import { BrowserRouter } from 'react-router-dom'
import DataProvider from './ToDoListContext.jsx'
import Homee from './Homee.jsx'
import Home from './Home.jsx'
import UseMemo from './UseMemo.jsx'

createRoot(document.getElementById('root')).render(

  // <Context.Provider value='hello'>   
  //   <App />
  //   </Context.Provider>
 
  <BrowserRouter>
  <DataProvider>
  <CartProvider>
    {/* <About/> */}
    <App/>
    {/* <Homee/> */}
    </CartProvider>
   </ DataProvider>
  </BrowserRouter>


// <UseMemo/>

)
