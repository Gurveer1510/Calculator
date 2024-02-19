import React from 'react'

export default function Container({children}) {
  return (
    <div className='w-80 h-[510px] bg-[#1B1A55] rounded-xl p-3'>
        {children}
    </div>
  )
}
