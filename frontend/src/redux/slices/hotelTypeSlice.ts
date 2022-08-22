import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { Hotel } from "../../typings";

interface HotelState {
  hotels:Hotel[] | null;
  loading:boolean
  error:boolean
}

const initialState: HotelState = {
  hotels: null,
  loading:false,
  error:false
};

export const hotelSlice = createSlice({
  name: "hotel",
  initialState,

  reducers: {
    getHotelsStart: (state) => {
      state.loading = true
    },
    getHotelsSuccess: (state,action:PayloadAction<Hotel[]>) => {
      state.loading = false
      state.hotels = action.payload;
    },
    getHotelsFailure: (state) => {
      state.error = true
      state.loading = false
    },
  },
});

export const { getHotelsStart,getHotelsSuccess,getHotelsFailure } = hotelSlice.actions

export const selectHotels = (state: RootState) => state.hotel.hotels;

export default hotelSlice.reducer;
