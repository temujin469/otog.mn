import { getHotelsFailure, getHotelsStart, getHotelsSuccess } from "../redux/slices/hotelSlice";
import { AppDispatch } from "../redux/slices/store";
import { generateHotels } from "../data/data";

export const getHotels = async (dispatch: AppDispatch) => {
  dispatch(getHotelsStart());
  try {
    const hotels =  generateHotels(10);
    dispatch(getHotelsSuccess(hotels))
  } catch (err) {
    console.log(err);
    dispatch(getHotelsFailure());
  }
};
