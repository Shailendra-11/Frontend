import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, incerment, incrementByAmount } from '../reduxtoolkit/couterSlice'

const App = () => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)
   const [digit , setDigit] = useState()
  console.log(count, "count")

  return (
    <>
      <h1>Counter</h1>
      <button onClick={()=>dispatch(incerment())}>+</button>
      <div>{count}</div>
      <button onClick={()=> dispatch(decrement())}>-</button>
      <br/>
      <br/>
      <input type='text' placeholder='Enter a number' value={digit} onChange={(e)=>setDigit(e.target.value)} />
      <br/>
      <br/>
      <button onClick={()=> dispatch(incrementByAmount(Number(digit)))}>Increment by</button>

    </>
  )
}

export default App