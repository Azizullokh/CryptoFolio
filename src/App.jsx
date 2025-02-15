import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import Home from '../src/pages/Home'
import Details from './pages/Details'
import MainLayout from './layout/MainLayout'
import { CryptoProvider } from "./context/CryptoContext";

function App() {
  return (
    <CryptoProvider>
      <div>
      <Routes>
        <Route path='/' element={<MainLayout><Home></Home></MainLayout>}></Route>
        <Route path='/details/:id' element={<MainLayout><Details></Details></MainLayout>}></Route>
      </Routes>
    </div>
    </CryptoProvider>
    
  )
}

export default App
