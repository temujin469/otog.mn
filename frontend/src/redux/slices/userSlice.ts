import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { User } from "../../typings";

interface HotelState {
  user:User | null;
  loading:boolean
  error:boolean
}

const initialState: HotelState = {
  user: null,
  loading:false,
  error:false
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    getUserStart: (state) => {
      state.loading = true
    },
    getUserSuccess: (state,action:PayloadAction<User>) => {
      state.loading = false
      state.user = action.payload;
    },
    getUserFailure: (state) => {
      state.error = true
      state.loading = false
    },
  },
});

export const { getUserStart,getUserSuccess,getUserFailure } = userSlice.actions

export const selectUser = (state: RootState) => state.user

export default userSlice.reducer;
