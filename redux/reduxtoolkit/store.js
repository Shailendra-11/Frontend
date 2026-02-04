import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './couterSlice'

export const store = configureStore({
     reducer: {
          counter: CounterSlice,
     }
})
