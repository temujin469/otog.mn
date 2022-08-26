import { configureStore } from '@reduxjs/toolkit'
import hotelReducer from './hotelSlice'
import hotelRegionReducer from './hotelRegionSlice'
import userReducer from './userSlice'
import searchReducer from './searchSlice'
import appReducer from './appSlice'

const store = configureStore({
  reducer:{
    hotel:hotelReducer,
    hotelRegion:hotelRegionReducer,
    user:userReducer,
    search:searchReducer,
    app:appReducer
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store