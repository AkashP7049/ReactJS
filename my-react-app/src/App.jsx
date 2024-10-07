// import Clock from "./Clock"
// import Index from "./Comp/Index"
// import Count from "./Count"
// import Home from "./Home"
// import Homee from "./Homee"
// import Input from "./Input"
// import NavBar from "./NavBar"
// import ToDoList from "./ToDoList"
// import Contact from "./Contact"
// import About from "./About"
// import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
// import C from "./C"
// import Foam from "./Foam"
// import Login from "./Login"
// import SignUp from "./SignUp"
// import Api from "./Api"
import UseEffect from "./UseEffect"
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
     
     {/* <Foam/> */}
     {/* <Home/> */}

     
     {/* <Router>
        <Routes>
         <Route   path='/' element={<SignUp/>} />
         <Route   path='/login' element={<Login/>} />
      
       </Routes>
       </Router> */}

       <UseEffect/>
       {/* <Api/> */}
    </div>

  )
}
export default App


// import Custom from "./Custom";

// const App = () => {
//   let  {count,increment,decrement ,reset , changecolor,color}=Custom()
//  return (
//   <div style={color?{backgroundColor:'green',height:'200px'}:{backgroundColor:'red',height:'200px'}}>
//      <h1>Custom hook</h1>
//   <h1>Count : {count}</h1>
//   <button style={{height:'30px',backgroundColor:'yellow',borderRadius:'40px'}} onClick={increment}>inc+1</button>
//   <button style={{height:'30px',backgroundColor:'yellow',borderRadius:'50px'}} onClick={decrement}>dec-1</button>
//   <button style={{height:'30px',backgroundColor:'yellow',borderRadius:'50px'}} onClick={reset}>reset</button>
//   <button style={color?{backgroundColor:'yellow ',height:'30px',borderRadius:'50px'}:{backgroundColor:'gray',height:'30px',borderRadius:'50px'}} onClick={changecolor}>red/green</button>
//     </div>
//   )
// }

// export default App