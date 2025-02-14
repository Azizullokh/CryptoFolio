import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import Home from '../src/pages/Home'
import Details from './pages/Home'
import MainLayout from './layout/MainLayout'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayout><Home></Home></MainLayout>}></Route>
        <Route path='/:id' element={<MainLayout><Details></Details></MainLayout>}></Route>
      </Routes>
    </div>
  )
}

export default App
