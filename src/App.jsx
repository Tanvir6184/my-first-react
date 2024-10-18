import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './team'
import User from './user'
import Friends from './friends'

function App() {
  
  function handleClick(){
    alert('button clicked')
  }

  const handleClick2 = () =>{
    alert('button 2 clicked')
  }

  return (
    <>

      <Friends></Friends>

      <User></User>

      <Team></Team>

      <Counter></Counter>

       <h2>Hello everyone!</h2>    
       <button onClick={handleClick}>Click Me</button>
       <button onClick={handleClick2}>Click Me 2</button>
       <button onClick={()=>{alert('third button clicked')}}>Third Button</button>
    </>
  )
}

export default App
