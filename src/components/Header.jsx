import React from 'react'
import Button from './Button'

export default function Header() {
  return (
    <div className='min-h-screen min-w-10 flex flex-col gap-10 items-center justify-center text-center  text-xmas-green3'>
        <div className=' bg-xmasgreen-500 gap-4 p-5 flex flex-col w-full mx-auto backdrop-blur-md '>
            <p className=''>It's to get you in the</p>
            <h1 className='uppercase text-xmas-lighterred font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-codystar'>festive</h1>
        </div>
        <Button></Button>
    </div>
  )
}
