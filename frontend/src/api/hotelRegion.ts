import { getHotelRegionsFailure, getHotelRegionsStart, getHotelRegionsSuccess } from "../redux/slices/hotelRegionSlice";
import { AppDispatch } from "../redux/slices/store";
import { regions } from "../utils/data";

export const getHotelRegions = async (dispatch: AppDispatch) => {
  dispatch(getHotelRegionsStart);
  try {
    const hotelRegions =  regions;
    dispatch(getHotelRegionsSuccess(hotelRegions))
  } catch (err) {
    console.log(err);
    dispatch(getHotelRegionsFailure());
  }
};
