import React, { useState } from 'react'


export default function Button() {

    const [shadowClass, setShadowClass] = useState('shadow-lg')

    const handleButtonClick = () => {
        setShadowClass('shadow-sm');
        setTimeout(() => {
            setShadowClass("shadow-lg");
        },200);
        window.location.href = '#player'
    }
  return (
    <button onClick={handleButtonClick} className={`px-8 py-4 bg-xmasgreen-500 rounded-md border-2 border-xmasgreen-500 text-xmas-green3 duration-500 shadow-xmasgreen-500 hover:shadow-md hover:shadow-xmasgreen-500  ${shadowClass}`}>
        Let's Start
    </button>
  )
}
