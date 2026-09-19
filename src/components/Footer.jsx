import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-300 mt-16'>
      <div className='max-w-7xl mx-auto px-4 py-10'>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>

          <div>
            <Link to="/" className='flex items-center gap-2 mb-3'>
              <div className='w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold'>
                S
              </div>
              <span className='text-xl font-bold text-white'>ShopHub</span>
            </Link>
            <p className='text-sm text-gray-400 max-w-xs'>
              Quality products at unbeatable prices. Trusted by 10k+ customers.
            </p>
          </div>

          
          <div>
            <h3 className='text-white font-semibold mb-3'>Quick Links</h3>
            <ul className='flex flex-col gap-2 text-sm'>
              <li><Link to="/" className='hover:text-blue-400 transition'>Home</Link></li>
              <li><Link to="/products" className='hover:text-blue-400 transition'>Products</Link></li>
              <li><Link to="/about" className='hover:text-blue-400 transition'>About</Link></li>
              <li><Link to="/cart" className='hover:text-blue-400 transition'>Cart</Link></li>
            </ul>
          </div>

          
          <div>
            <h3 className='text-white font-semibold mb-3'>Get in Touch</h3>
            <ul className='flex flex-col gap-2 text-sm text-gray-400'>
              <li>📧 support@shophub.com</li>
              <li>📞 +92 300 1234567</li>
              <li>📍 Peshawar, Pakistan</li>
            </ul>
          </div>

        </div>

        <div className='border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500'>
          © {new Date().getFullYear()} ShopHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;