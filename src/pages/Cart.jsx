import React from 'react'
import { useCart } from '../context/CartContext'

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  if (cart.length === 0) return <h2 className='text-center py-20'>Cart is empty</h2>
  return (
    <div className='max-w-4xl mx-auto p-6'>
      {cart.map((item) => (
        <div key={item.id} className='flex justify-between border p-4 mb-3 rounded-2xl'>
          <div className='flex gap-3'>
            <img src={item.image} className='w-16 h-16' alt="Cart product" />
            <div>
              <h3 >{item.title}</h3>
              <p>${item.price}</p>
            </div>
          </div>
          <button onClick={() => removeFromCart(item.id)} className='bg-red-500 text-white px-4 py-1 rounded-full h-fit'>Remove</button>
        </div>
      ))}
    </div>
  )
}

export default Cart