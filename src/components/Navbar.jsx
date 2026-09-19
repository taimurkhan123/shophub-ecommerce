import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { cart } = useCart();

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600 transition"

  return (
    <>
      <header className='sticky top-0 z-50 bg-white shadow-sm'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex items-center justify-between h-16'>

            <Link to="/" className='flex items-center gap-2'>
              <div className='w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-center text-white font-bold'>
                S
              </div>
              <span className='text-xl font-bold'>ShopHub</span>
            </Link>

            <nav className='hidden md:flex items-center gap-8'>
              <NavLink to="/" className={linkClass}>Home</NavLink>
              <NavLink to="/about" className={linkClass}>About</NavLink>
              <NavLink to="/products" className={linkClass}>Products</NavLink>

              <Link to="/cart" className='relative'>
                <span className='text-2xl'>🛒</span>
                <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
                  {cart.length}
                </span>
              </Link>
            </nav>

            <div className='md:hidden flex items-center gap-3'>
              <Link to="/cart" className='relative'>
                <span className='text-2xl'>🛒</span>
                <span className='absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full'>
                  {cart.length}
                </span>
              </Link>

              <button className='text-2xl' onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>

          {isOpen && (
            <div className='md:hidden pb-4 flex flex-col gap-4 bg-white'>
              <NavLink to="/" onClick={() => setIsOpen(false)} className={linkClass}>Home</NavLink>
              <NavLink to="/about" onClick={() => setIsOpen(false)} className={linkClass}>About</NavLink>
              <NavLink to="/products" onClick={() => setIsOpen(false)} className={linkClass}>Products</NavLink>
            </div>
          )}
        </div>
      </header>
    </>
  )
}

export default Navbar