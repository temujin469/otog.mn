import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { HotelRegion } from "../../typings";

interface HotelState {
  regions:HotelRegion[] | null;
  loading:boolean
  error:boolean
}

const initialState: HotelState = {
  regions: null,
  loading:false,
  error:false
};

export const hotelRegionSlice = createSlice({
  name: "hotel",
  initialState,

  reducers: {
    getHotelRegionsStart: (state) => {
      state.loading = true
    },
    getHotelRegionsSuccess: (state,action:PayloadAction<HotelRegion[]>) => {
      state.loading = false
      state.regions = action.payload;
    },
    getHotelRegionsFailure: (state) => {
      state.error = true
      state.loading = false
    },
  },
});

export const { getHotelRegionsStart,getHotelRegionsSuccess,getHotelRegionsFailure } = hotelRegionSlice.actions;

export default hotelRegionSlice.reducer;
