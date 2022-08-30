import React, { useState } from 'react'
import { useAppSelector } from '../../hooks'
import classNames from 'classnames'

function Settings() {
  const { user } = useAppSelector(state => state.user)
  const [email, setEmail] = useState(user?.email)
  const [name, setName] = useState(user?.name)
  const [password, setPassword] = useState('')

  const isChanged = email !== user?.email || name !== user?.name || password !== "";

  const resetValue = () => {
    setEmail(user?.email)
    setName(user?.name)
    setPassword('')
  }

  return (
    <div>
      <div className='max-w-[600px] mx-auto rounded-xl bg-white shadow-xl border border-gray-light p-6 md:p-10 mt-7'>
        <h3 className="heading-md text-gray-dark">Хувийн мэдээлэл</h3>
        <div className="mt-8">
          <div className="grid grid-cols-1 gap-6">
            <div className='space-y-6'>
              <label className="block">
                <span className="text-gray-dark text-base">Нэр</span>
                <input
                  type="text"
                  className="mt-1 border border-gray-light p-3 md:p-4 block w-full rounded-md border-gray-300 shadow-sm outline-primary"
                  placeholder="Нэр"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label className="block">
                <span className="text-gray-dark text-base">N-Мэйл</span>
                <input
                  type="email"
                  className="mt-1 border border-gray-light p-3 md:p-4 block w-full rounded-md border-gray-300 shadow-sm outline-primary"
                  placeholder="N-Мэйл"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <div className='flex justify-end items-center gap-5 mt-6'>
                <button className={classNames('font-medium', { 'hidden': !isChanged })} onClick={resetValue}>
                  Болих
                </button>
                <button className='btn-primary px-8 py-3 disabled:opacity-50'
                  disabled={!isChanged}
                >
                  Солих
                </button>
              </div>
            </div>

            <div>
              <h3 className="heading-md text-gray-dark">Нууц үг солих</h3>
              <div className='space-y-6'>
                <label className="block">
                  <span className="text-gray-dark text-base">Хуучин нууц үг</span>
                  <input
                    type="email"
                    className="mt-1 border border-gray-light p-3 md:p-4 block w-full rounded-md border-gray-300 shadow-sm outline-primary"
                    placeholder="N-Мэйл"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-dark text-base">Шинэ нууц үг</span>
                  <input
                    type="email"
                    className="mt-1 border border-gray-light p-3 md:p-4 block w-full rounded-md border-gray-300 shadow-sm outline-primary"
                    placeholder="N-Мэйл"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
                <label className="block">
                  <span className="text-gray-dark text-base">Шинэ нууц үг</span>
                  <input
                    type="email"
                    className="mt-1 border border-gray-light p-3 md:p-4 block w-full rounded-md border-gray-300 shadow-sm outline-primary"
                    placeholder="N-Мэйл"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className='flex justify-end items-center gap-5 mt-6'>
            <button className={classNames('font-medium', { 'hidden': !isChanged })} onClick={resetValue}>
              Болих
            </button>
            <button className='btn-primary px-8 py-3 disabled:opacity-50'
              disabled={!isChanged}
            >
              Солих
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings