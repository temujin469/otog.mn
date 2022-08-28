import React, { Dispatch, SetStateAction } from 'react'

type Props = {
  setShow: Dispatch<SetStateAction<"register" | "login" | "google"|"facebook">>
}

function LoginWithFacebook({setShow}:Props) {
  return (
    <div>LoginWithFacebook</div>
  )
}

export default LoginWithFacebook