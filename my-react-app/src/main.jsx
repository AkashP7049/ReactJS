import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import Contact from './Contact.jsx'
import Context from './Context.jsx'
createRoot(document.getElementById('root')).render(

  <Context.Provider value='hello'>   
    <App />
    </Context.Provider>
 
)
