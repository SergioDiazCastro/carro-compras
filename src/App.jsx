import { useState } from 'react'
import { Home } from './components/layouts/Home/Home'
import { Route, Routes } from 'react-router-dom'
import './App.css'
<Routes><Route /></Routes>

function App() {

  return (
    <>
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='*' element={<notFound />} />
      </Routes>
      </div>
    </>
  )
}

export default App
