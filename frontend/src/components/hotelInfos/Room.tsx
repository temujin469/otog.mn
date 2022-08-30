import React from 'react'
import RoomSearcher from '../searcher/RoomSearcher'
// import ReverseInput from '../ReverseInput'
import Searcher from '../searcher/Searcher'
import RoomCard from './RoomCard'

function Room() {
  return (
    <div className='space-y-5 p-4 md:p-0'>
      <h2 className='heading-md'>Өрөөгө сонгох</h2>
      <RoomSearcher />
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          Array(5).fill(null).map((_, i) => (
            <RoomCard />
          ))
        }
      </div>
    </div>
  )
}

export default Room