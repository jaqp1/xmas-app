import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Player from './components/Player'

function App() {

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-xmasgreen-100 to-xmasgreen-500'>
      <Header></Header>
      <Player>
      </Player>
    </main>
  )
}

export default App
