import React from 'react'
import Hero from './components/Hero.jsx'

const App = () => {
  return (
    <main className='relative min-h-screen overflow-x-hidden'>
      <Hero/>

      <section className='z-0 min-h-screen bg-blue-300'/>
    </main>
  )
}

export default App

