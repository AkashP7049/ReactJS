import Clock from "./Clock"
import Index from "./Comp/Index"
import Count from "./Count"
import Home from "./Home"
import Input from "./Input"
import ToDoList from "./ToDoList"


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
     <ToDoList/> */}
     <Count/>
    </div>

  )
}
export default App