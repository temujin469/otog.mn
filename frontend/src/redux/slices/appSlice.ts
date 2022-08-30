import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  showLogin: boolean;
  showMap:boolean
}

const initialState: AppState = {
  showLogin: false,
  showMap:false
};

export const appSlice = createSlice({
  name: "app",
  initialState,

  reducers: {
    handleShowLogin: (state, action: PayloadAction<boolean>) => {
      state.showLogin = action.payload;
    },
    handleShowMap:(state,action: PayloadAction<boolean>) => {
      state.showMap = action.payload;
    }
  },
});

export const {
  handleShowLogin,
  handleShowMap
} = appSlice.actions;

export default appSlice.reducer;
