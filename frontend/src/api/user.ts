import { AppDispatch } from "../redux/slices/store";
import { getUserFailure, getUserStart, getUserSuccess } from "../redux/slices/userSlice";
import { User, UserBody } from "../typings";
import axios from "./axios";
import toast from 'react-hot-toast'
import { getError } from "../utils/getError";

export const signin = async (dispatch:AppDispatch,userBody:UserBody) => {
  dispatch(getUserStart())
  const toastId = toast.loading("Түр хүлээнэ үү...")

  try{
    const {data} = await axios.post('/auth/signin',userBody)
    dispatch(getUserSuccess(data.user))
    toast.success('Амжилттай бүртгэгдлээ',{id:toastId})
  }
  catch(err){
    toast.error(getError(err),{id:toastId})
    dispatch(getUserFailure())
  }
}

export const signup = async (dispatch:AppDispatch,userBody:UserBody) => {
  dispatch(getUserStart())
  const toastId = toast.loading("Түр хүлээнэ үү...")

  try{
    const {data} = await axios.post('/auth/register',userBody)
    dispatch(getUserSuccess(data.user))
    toast.success('Амжилттай бүртгэгдлээ',{id:toastId})


  }
  catch(err){
    toast.error(getError(err),{id:toastId})
    dispatch(getUserFailure())
  }
}

export const updateProfile = async (dispatch:AppDispatch,userInfo:User) => {
  dispatch(getUserStart());
  const toastId = toast.loading("Түр хүлээнэ үү...")

  try {
    const { data } = await axios.put('/users/updateUser',userInfo,
      { headers: { authorization: `Bearer ${userInfo.accessToken}` } }
    );
    dispatch(getUserSuccess(data.user))
    toast.success('Амжилттай бүртгэгдлээ',{id:toastId})

  } catch (err) {
    toast.error(getError(err),{id:toastId})
    dispatch(getUserFailure())
  }
}