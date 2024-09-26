import Clock from "./Clock"
import Index from "./Comp/Index"
import Count from "./Count"
import Home from "./Home"
import Homee from "./Homee"
import Input from "./Input"
import NavBar from "./NavBar"
import ToDoList from "./ToDoList"
import Contact from "./Contact"
import About from "./About"
import "./App.css"
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import C from "./C"
import Foam from "./Foam"
const App = () => {
  let a=5
  let b=56
  return (
    <div>
     {/* <h1>HELLO</h1>
      <p>Hiiii</p>
     <Home  data={a} data1={b} />
      <Index/>
      <Clock/>
     <Input/>
     <ToDoList/>
     <Count/> */}
     {/* <NavBar/>
     <C/> */}
     {/* <Router>
     <NavBar/>
     <Routes>
      <Route path="/" element={<Homee/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
     </Routes>
     </Router> */}
     
     <Foam/>

    </div>

  )
}
export default App