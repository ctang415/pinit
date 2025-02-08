import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'

function App() {

  return (
    <>
      <Outlet />
    </>
  )
}

export default App
