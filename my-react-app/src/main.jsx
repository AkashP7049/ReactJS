import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import Contact from './Contact.jsx'
import CartProvider from './Context.jsx'

import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(

  // <Context.Provider value='hello'>   
  //   <App />
  //   </Context.Provider>
 
  <BrowserRouter>
  <CartProvider>
    {/* <About/> */}
    <App/>
    </CartProvider>
   
  </BrowserRouter>

)
