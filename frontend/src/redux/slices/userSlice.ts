import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { User } from "../../typings";
import toast from "react-hot-toast";

interface HotelState {
  user:User | null;
  loading:boolean
  error:boolean
}

const initialState: HotelState = {
  user:localStorage.getItem('user')? JSON.parse( localStorage.getItem('user') as string): null,
  // user:null,
  loading:false,
  error:false
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    getUserStart: (state) => {
      state.loading = true
      state.error = false
    },
    getUserSuccess: (state,action:PayloadAction<User>) => {
      state.loading = false
      state.error = false
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    getUserFailure: (state) => {
      state.error = true
      state.loading = false
    },
    logOut:(state)=>{
      localStorage.removeItem('user')
      state.user = null
      toast.success('Амжилттай гарлаа')
    }
  },
});

export const { getUserStart,getUserSuccess,getUserFailure,logOut } = userSlice.actions

export const selectUser = (state: RootState) => state.user

export default userSlice.reducer;
