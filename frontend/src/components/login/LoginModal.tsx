import React, { useState } from 'react'
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { handleShowLogin } from '../../redux/slices/appSlice';
import Login from './Login';
import Register from './Register';



function LoginModal() {

  const { showLogin } = useAppSelector(state => state.app)
const [show,setShow] = useState<"login" | "register">("login")

  const dispatch = useAppDispatch()

  const isShow = classNames({ "hidden": !showLogin })
  const handleShow  = () => {
    return  show === "login"  ?  <Login setShow={setShow}/> : <Register setShow={setShow}/>
  }

  return (
    <div className={isShow}>
      <div className="absolute bg-black/50 w-full h-full left-0 top-0" onClick={() => dispatch(handleShowLogin(false))}></div>
      {handleShow()}
    </div>

  )
}

export default LoginModal