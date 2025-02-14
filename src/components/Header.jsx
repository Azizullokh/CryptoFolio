import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='bg-[#14161a] py-3 '>
        <div className="container flex items-center w-[80%] justify-between m-auto">
             <Link className='text-[#87CEEB] text-[20px]' to ='/'>CRYPTOFOLIO</Link>
      <div className='flex gap-[15px] cursor-pointer'>
        <select className='text-white outline-none bg-[#14161a] cursor-pointer'>
            <option>USD</option>
            <option>EUR</option>
            <option>RUB</option>
        </select>
        <button className='bg-[#87CEEB] py-2 px-4 rounded cursor-pointer'>WATCH LIST</button>
      </div>
        </div>
    </header>
  )
}

export default Header
