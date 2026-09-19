import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    api
      .getProducts()
      .then((data) => setProducts(data || []))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-[60vh]'>
        <div className='w-12 h-12 border-4 border-gray-200 border-t-black rounded-full animate-spin'></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex flex-col items-center justify-center min-h-[60vh] gap-3'>
        <div className='w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-red-600 text-2xl font-bold'>
          !
        </div>
        <p className='text-red-500 font-medium'>{error}</p>
      </div>
    );
  }


  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-6'>All Products</h1>

      <input
        type='text'
        placeholder='Search products...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='w-full md:w-80 border border-gray-300 rounded-full px-5 py-2.5 mb-6 outline-none focus:border-blue-600 transition'
      />

      {filtered.length === 0 ? (
        <p className='text-center text-gray-500 py-10'>No products found.</p>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {filtered.map((p) => (
            <div
              key={p.id}
              className='border rounded-2xl p-4 hover:shadow-lg transition-shadow duration-200'
            >
              <img
                src={p.image}
                className='w-full h-48 object-contain bg-gray-50 rounded-xl'
                alt={p.title}
              />
              <h3 className='font-semibold mt-3 line-clamp-1'>{p.title}</h3>
              <p className='text-blue-600 font-bold mt-1'>${p.price}</p>
              <Link
                to={`/products/${p.id}`}
                className='mt-3 block w-full text-center bg-black text-white py-2.5 rounded-full hover:bg-blue-600 transition-colors duration-200'
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;