import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { Option } from "../../typings";

type DateType = {
  startDate: any;
  endDate: any;
  key:"selection"
};

interface SearchState {
  destination: string;
  date: DateType[];
  option: Option;
  totalGuests: number;
}

const initialState: SearchState = {
  destination: "",
  date: [{
    startDate: new Date(),
    endDate: new Date(),
    key:"selection"
  }],
  option: {
    adult: 1,
    children: 0,
    room: 1,
  },
  totalGuests: 1,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,

  reducers: {
    setOptionChildren: (state,action:PayloadAction< "nemeh" | "hasah" >) => {
      if(action.payload=== "nemeh"){
        state.option.children += 1
      }else{
        state.option.children -= 1
      }
      state.totalGuests = state.option.adult + state.option.children
    },
    setOptionAdult: (state,action:PayloadAction< "nemeh" | "hasah" >) => {
      if(action.payload === "nemeh"){
        state.option.adult += 1
      }else{
        state.option.adult -= 1
      }
      state.totalGuests = state.option.adult + state.option.children

    },
    setOptionRoom: (state,action:PayloadAction< "nemeh" | "hasah" >) => {
      if(action.payload === "nemeh"){
        state.option.room += 1
      }else{
        state.option.room -= 1
      }
      state.totalGuests = state.option.adult + state.option.children
    },
    setDate: (state, action: PayloadAction<any>) => {
      state.date = action.payload
    },
    setDestination: (state, action: PayloadAction<string>) => {
      state.destination= action.payload
    },
  },
});

export const { setDate,setOptionAdult,setOptionRoom,setOptionChildren,setDestination } = searchSlice.actions;

export default searchSlice.reducer;
