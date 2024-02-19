import React from 'react'

export default function ButtonContainer({children}) {
  return (
    <div className='w-full h-[400px] p-2 my-2 grid grid-cols-4 grid-rows-5 gap-2 bg-[#535C91] rounded-lg'>
        {children}
    </div>
  )
}
