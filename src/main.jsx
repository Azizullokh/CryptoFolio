import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CryptoProvider } from './context/CryptoContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <CryptoProvider>
    <App />
  </CryptoProvider>
  </BrowserRouter>,
)
