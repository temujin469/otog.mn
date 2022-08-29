import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { Option } from "../../typings";

type DateType = {
  startDate: any;
  endDate: any;
  key: "selection";
};

interface SearchState {
  destination?: string;
  date: DateType[];
  // option: Option;
  children: number;
  adult: number;
  bedroom: number;
  bathroom: number;
  price: {
    lt: number;
    gt: number;
  } | null;
  hotelType: string[] | null;
  amenities: string[] | null;
}

const initialState: SearchState = {
  date: [
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ],
  adult: 1,
  bedroom: 1,
  bathroom: 0,
  price: null,
  hotelType: null,
  amenities: null,
  children: 0,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,

  reducers: {
    handleChildren: (state, action: PayloadAction<number>) => {
      state.children = action.payload;
    },
    handleAdult: (state, action: PayloadAction<number>) => {
      state.adult = action.payload;
    },
    handleBedroom: (state, action: PayloadAction<number>) => {
      state.bedroom = action.payload;
    },
    handleBathroom: (state, action: PayloadAction<number>) => {
      state.bathroom = action.payload;
    },
    handleDate: (state, action: PayloadAction<any>) => {
      state.date = action.payload;
    },
    handleDestination: (state, action: PayloadAction<string>) => {
      state.destination = action.payload;
    },
  },
});

export const {
  handleDate,
  handleBedroom,
  handleDestination,
  handleAdult,
  handleChildren,
  handleBathroom,
} = searchSlice.actions;

export default searchSlice.reducer;
