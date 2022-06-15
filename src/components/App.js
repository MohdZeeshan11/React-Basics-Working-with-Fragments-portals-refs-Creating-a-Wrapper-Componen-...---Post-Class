import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
let initialState = 0;
const App = () => {
const [state,dispatch] = useReducer(counterReducer,initialState)
  return (
    <div id="main">
    <span id="counter">{state}</span>
    <button id="increment-btn" onClick={()=>{dispatch("inc")}}>Increase</button>
    <button id="decrement-btn" onClick={()=>{dispatch("dec")}}>Decrease</button>
    </div>
  )
}


export default App;
