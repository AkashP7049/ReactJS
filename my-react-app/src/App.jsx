import Index from "./Comp/Index"
import Home from "./Home"


const App = () => {
  let a=5
  let b=56
  return (
    <div>
     <h1>HELLO</h1>
     <p>Hiiii</p>
     <Home  data={a} data1={b} />
     <Index/>
    </div>

  )
}
export default App