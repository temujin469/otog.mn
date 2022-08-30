import React from 'react'
import Footer from '../components/footer/Footer'
import Header2 from '../components/header/Header2'
import { TiLocation } from 'react-icons/ti'
import { IoIosMail } from 'react-icons/io'
import { MdPhoneAndroid } from 'react-icons/md'
import { FaUserCircle } from 'react-icons/fa'

function Contact() {
  return (
    <div className='h-screen overflow-y-scroll'>
      <Header2 />
      <div className='min-h-screen mt-[52px] pt-16'>
        <section className='container'>
          <h2 className='heading-md text-gray-dark text-center mb-10'>Бидэнтэй холбоо барих</h2>
          <div className='grid md:grid-cols-4 gap-5 md:divide-x divide-gray/30'>
            <div className='flex flex-col items-center'>
              <div className='rounded-full bg-primary/30 mb-3 p-6 shadow-md'>
                <TiLocation className='text-[30px] text-primary' />
              </div>
              <p className='text-xl text-gray-dark'>Хаяг</p>
              <p className='text-gray'>12124 First Street, nr 54</p>
            </div>
            <div className='flex flex-col items-center'>
              <div className='rounded-full bg-primary/30 mb-3 p-6 shadow-md'>
                <IoIosMail className='text-[30px] text-primary' />
              </div>
              <p className='text-xl text-gray-dark'>И-Мэйл</p>
              <p className='text-gray'>hello@email.com</p>
            </div>
            <div className='flex flex-col items-center'>
              <div className='rounded-full bg-primary/30 mb-3 p-6 shadow-md'>
                <MdPhoneAndroid className='text-[30px] text-primary' />
              </div>
              <p className='text-xl text-gray-dark'>Утас</p>
              <p className='text-gray'>+976-70009157</p>
            </div>
            <div className='flex flex-col items-center'>
              <div className='rounded-full bg-primary/30 mb-3 p-6 shadow-md'>
                <FaUserCircle className='text-[30px] text-primary' />
              </div>
              <p className='text-xl text-gray-dark'>Холбоо</p>
              <p className='text-gray'>Otog.mn</p>
            </div>
          </div>
        </section>

        <section className='container mb-20'>
          <div className='max-w-[600px] mx-auto rounded-xl bg-white shadow-xl border border-gray-light p-6 md:p-10 mt-16'>
            <h1 className="heading-md text-gray-dark">Холбоо барих</h1>
            <div className="mt-8">
              <div className="grid grid-cols-1 gap-6">
                <label className="block">
                  <span className="text-gray-dark text-base">Нэр</span>
                  <input
                    type="text"
                    className="mt-1 border border-gray-light p-3 md:p-4 block w-full rounded-md border-gray-300 shadow-sm outline-primary"
                    placeholder="Нэр"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-dark text-base">N-Мэйл</span>
                  <input
                    type="email"
                    className="mt-1 border border-gray-light p-3 md:p-4 block w-full rounded-md border-gray-300 shadow-sm outline-primary"
                    placeholder="N-Мэйл"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-dark text-base">Мессэж</span>
                  <textarea
                    className="mt-1 border border-gray-light p-3 md:p-4 block w-full rounded-md border-gray-300 shadow-sm outline-primary"
                    rows={8}
                    placeholder='Мессэж...'
                    defaultValue={""}
                  />
                </label>
              </div>
              <div className='flex justify-end'>
                <button className='btn-primary w-full md:w-auto mt-6 px-8 py-4'>
                  Илгээх
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>

  )
}

export default Contact