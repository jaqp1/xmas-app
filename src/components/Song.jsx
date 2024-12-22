import React from 'react'

export default function Song(props) {

  const { song } = props



  return (
    <div id='song' className=' bg-xmasgreen-500  xl:w-1/4 md:w-1/3 lg:w-1/3 md:mr-12 w-3/4  rounded-md text-xmasgreen-100 flex flex-col relative pb-4'>
       <div className='aspect-w-1 aspect-h-1 rounded-md'>
        <img src={`/assets/${song.title === "Do They Know It's Christmas?" ? "Do They Know It's Christmas": song.title}.jpg`} className=' w-full h-full object-cover rounded-md'></img> 
        <div className='absolute inset-0 bg-gradient-to-t from-xmasgreen-500 via-transparent to-transparent'></div>
        </div>
        <div className="mt-1 flex flex-col items-center p-2 pt-0">
          <h1 className="mt-4 text-lg font-bold text-center">{song.title}</h1>
          <h1 className="text-md text-center">{song.artist}</h1>
      </div>    
    </div>
  )
}
