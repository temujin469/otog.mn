import React from "react";
import { Outlet,Navigate} from 'react-router-dom'
import { useAppSelector } from "./hooks";


const RequiredAuth = () => {
  const { user } = useAppSelector(state => state.user)
  return (
    user?.accessToken ? <Outlet /> : <Navigate to={'/'} />
  )
}

export default RequiredAuth;