import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5);
  // let counter =5;

  //1 add value
  const addValue = () => {
    // console.log('Value Added',counter);
    setCounter(counter + 1);
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }

  if(counter < 0){
    counter = 0;
  }else if(counter >20){
    counter = 20;
  }

  return (
    <>
      <h1>Counter Increment & Decrement</h1>
      <h2>Counter Value: {counter}</h2>

      <button
        onClick={addValue}
      >Add Value</button>

      <br />

      <button
        onClick={
          removeValue
        }
      >Remove Value</button>
    </>
  )

}

export default App
