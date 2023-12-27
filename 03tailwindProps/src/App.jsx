import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  return (
    <>
      <h1 className='bg-green-400 rounded-xl p-4 text-black mb-4'>Tailwind Test</h1>
      <Card userName="Harish" btnText="click me"/>
      <Card userName="Tony" btnText="visit me"/>
    </>
  )
}

export default App
