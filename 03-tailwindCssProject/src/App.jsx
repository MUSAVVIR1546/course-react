import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from'./components/Card'

function App() {
  const [count, setCount] = useState(0)
  
  const myObj = {
    name:"abdul musavvir",
    age:22 
  }

  let newArr = [1,2,3];
  
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>TailWind Css</h1>
     <Card channel="ChaiAurCode" btnText = "Click me"/>
     <Card channel="Anjana Vakil" />
    </>

  )
}

export default App
