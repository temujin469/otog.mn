import { AppDispatch } from "../redux/slices/store";
import { getUserFailure, getUserStart, getUserSuccess } from "../redux/slices/userSlice";
import { User, UserBody } from "../typings";
import { api } from "../utils/axios";

export const signin = async (dispatch:AppDispatch,userBody:UserBody) => {
  dispatch(getUserStart())
  try{
    const user:User = await api.post('/users/signin',userBody)
    dispatch(getUserSuccess(user))

  }
  catch(err){
    dispatch(getUserFailure())
  }
}

export const signup = async (dispatch:AppDispatch,userBody:UserBody) => {
  dispatch(getUserStart())
  try{
    const user:User = await api.post('/users/register',userBody)
    dispatch(getUserSuccess(user))

  }
  catch(err){
    dispatch(getUserFailure())
  }
}