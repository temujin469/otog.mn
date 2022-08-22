import { configureStore } from '@reduxjs/toolkit'
import hotelReducer from './hotelSlice'
import hotelRegionReducer from './hotelRegionSlice'

const store = configureStore({
  reducer:{
    hotel:hotelReducer,
    hotelRegion:hotelRegionReducer
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store