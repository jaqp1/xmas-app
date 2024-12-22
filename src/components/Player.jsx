import React, { useState, useEffect } from 'react'
import Song from './Song'
import ChristmasSongs from '../assets/ChristmasSongs.js'

export default function Player() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const songsInstance = new ChristmasSongs();
    setSongs(songsInstance.getAllSongs());
  }, []);

  return (
    <div className='min-h-screen flex flex-col md:flex-row md:flex-wrap gap-10 items-center justify-center text-center h-auto' id='player'>
      <div className='bg-xmasgreen-500 py-10 gap-4 p-5 flex flex-col w-full mx-auto shadow-lg'>
        <h1 className='uppercase text-xmas-lighterred font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-codystar'>20 timeless Christmas Songs</h1>
      </div>
      
        {songs.map((song, index) => (
          <Song key={index} song={song}></Song>
        ))}
        
    </div>
  )
}
