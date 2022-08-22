import { configureStore } from '@reduxjs/toolkit'
import hotelReducer from './hotelSlice'
import hotelRegionReducer from './hotelRegionSlice'
import userReducer from './userSlice'

const store = configureStore({
  reducer:{
    hotel:hotelReducer,
    hotelRegion:hotelRegionReducer,
    user:userReducer
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store