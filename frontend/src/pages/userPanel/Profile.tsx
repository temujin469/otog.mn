import React from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks'

function Profile() {
  const { user } = useAppSelector(state => state.user)
  return (
    <div>
      <div className='flex flex-col items-center gap-3 mt-10'>
        <img src='https://cdn-icons-png.flaticon.com/512/219/219988.png' className='w-[200px]' />
        <p className='heading-lg'>{user?.name}</p>
        <p className='heading-sm font-medium text-gray'>{user?.email}</p>
        <p className='heading-sm font-medium text-gray'>99607953</p>
        <button className='btn-primary min-w-[200px] py-3 mt-3'>
          <Link to="settings" className='flex items-center gap-1'>
            Тохиргоо
            <AiOutlineEdit className='text-lg'/>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Profile