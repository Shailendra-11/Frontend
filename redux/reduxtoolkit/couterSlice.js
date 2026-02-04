import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   value :1,
}

export const CounterSlice =  createSlice({
  name: 'counter',
  initialState ,
  reducers :{
      incerment : (state, action)=>{
         state.value  += 1;
      },
      decrement : (state) =>{
          if (state.value> 0) {
            state.value -= 1;

          }
      },
      incrementByAmount : (state ,action) =>{
           state.value += action.payload;
      }
  }
}) 

export const { incerment, decrement , incrementByAmount } = CounterSlice.actions

export default CounterSlice.reducer

