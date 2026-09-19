import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='text-center py-20'>
      <h1 className='text-5xl font-bold'>404</h1>
      <p className='text-gray-500 mt-3'>Page Not Found</p>
      <Link to="/" className='inline-block mt-6 bg-blue-600 text-white px-6 py-2 rounded-full'>Go Home</Link>
    </div>
  )
}

export default NotFound