import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  showLogin: boolean;
}

const initialState: AppState = {
  showLogin: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,

  reducers: {
    handleShowLogin: (state, action: PayloadAction<boolean>) => {
      state.showLogin = action.payload;
    },
  },
});

export const {
  handleShowLogin
} = appSlice.actions;

export default appSlice.reducer;
