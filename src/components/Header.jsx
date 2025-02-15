import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCrypto } from '../context/CryptoContext'

function Header() {
    const { currency, setCurrency } = useCrypto();
const navigate = useNavigate()

function handleNavigate() {
    navigate('/')
}


  return (
    <header className='bg-[#14161a] py-3 '>
        <div className="container flex items-center w-[80%] justify-between m-auto">
             <Link className='text-[#87CEEB] text-[20px]' to ='/'>CRYPTOFOLIO</Link>
      <div className='flex gap-[15px] cursor-pointer'>
        <select 
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className='text-white outline-none bg-[#14161a] cursor-pointer'>
            <option value='USD'>USD</option>
            <option value='EUR'>EUR</option>
            <option value='GBP'>GBP</option>
        </select>
        <button onClick={handleNavigate} className='bg-[#87CEEB] py-2 px-4 rounded cursor-pointer'>WATCH LIST</button>
      </div>
        </div>
    </header>
  )
}

export default Header
