import React from 'react'

export default function Screen({value}) {
  return (
    <div className='w-full h-20 flex justify-end items-center px-3 text-white text-3xl font-bold rounded-lg bg-[#B7C9F2]/50'>
        {value}
    </div>
  )
}
