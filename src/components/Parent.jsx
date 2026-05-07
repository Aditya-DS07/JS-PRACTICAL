import Child from "./Child"

const Parent = () => {
    let name  = "Aditya"
    let age = 18
  return (
    <>
        <Child name = {name} age = {age}/>
    </>
  )
}

export default Parent