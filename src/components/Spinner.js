import React from 'react'
import './Spinner.css'

export default function Spinner() {
  return (
    <div className='flex flex-col items-cneter soace-y-2'>
      <div className='custom-loader'>

      </div>
      <p className='text-bgDark text-lg font-semibold'>loading.....</p>
    </div>
  )
}
