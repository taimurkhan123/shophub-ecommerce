import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { api } from '../services/api';
import { useCart } from '../context/CartContext';

const ProductsDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    api.getProductsById(id)
      .then(setProduct)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-[60vh]'>
        <div className='w-12 h-12 border-4 border-gray-200 border-t-black rounded-full animate-spin'></div>
      </div>
    );
  }

  if (error) return <div className='text-center py-20 text-red-500'>{error}</div>
  if (!product) return <div className='text-center py-20'>Product Not Found</div>

  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      <Link to="/products" className='inline-block border px-4 py-2 rounded-full mb-6 hover:bg-gray-100'>Back to Products</Link>

      <div className='grid md:grid-cols-2 gap-10'>
        <div className='bg-gray-50 rounded-3xl p-6'>
          <img src={product.image} className='w-full h-[350px] object-contain' alt={product.title} />
        </div>
        <div>
          <h1 className='text-3xl font-bold'>{product.title}</h1>
          <p className='text-2xl text-blue-600 mt-3'>${product.price}</p>
          <p className='text-gray-600 mt-4'>{product.description}</p>
          <button className='mt-8 w-full bg-black text-white py-3 rounded-full' onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductsDetail