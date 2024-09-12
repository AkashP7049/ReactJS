

const Index = () => {
    let arr=[1,2,3,4,5,6,7,8,9,]
  return (
    <div>
       {
        arr.map((a)=>{
            return(<>
                <li> {a} </li>
                </> )
        })
       }
    </div>
  )
}

export default Index