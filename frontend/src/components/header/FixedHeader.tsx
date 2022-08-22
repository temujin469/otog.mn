import React from 'react'

type Props = {
  show:boolean
  setShow: ()=>boolean
}

function FixedHeader({show,setShow}:Props) {
  return (
    <div>FixedHeader</div>
  )
}

export default FixedHeader