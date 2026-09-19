import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-4 py-10 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <span className="inline-block bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full mb-4">
              New Collections 2027 🔥
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Best Products, <br />
              <span className="text-blue-600">Best Prices</span>
            </h1>

            <p className="text-gray-600 mt-4 text-lg max-w-lg mx-auto md:mx-0">
              Discover amazing products from ShopHub. Quality, fast delivery, and
              trusted by 10k+ customers.{" "}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/products"
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition text-center"
              >
                Shop Now 🛒
              </Link>

              <Link
                to="/about"
                className="border border-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition text-center"
              >
                Learn More
              </Link>
            </div>

            <div className="mt-10 flex gap-8 justify-center md:justify-start">
              <div className="bg-white p-6 rounded-2xl text-center hover:shadow-md hover:-translate-y-1 transition duration-300">
                <h3 className="text-2xl font-bold">190+</h3>
                <p className="text-gray-500 text-sm">Products</p>
              </div>

              <div className="bg-white p-6 rounded-2xl text-center hover:shadow-md hover:-translate-y-1 transition duration-300">
                <h3 className="text-2xl font-bold">10k+</h3>
                <p className="text-gray-500 text-sm">Customers</p>
              </div>

              <div className="bg-white p-6 rounded-2xl text-center hover:shadow-md hover:-translate-y-1 transition duration-300">
                <h3 className="text-2xl font-bold">4.8⭐</h3>
                <p className="text-gray-500 text-sm">Rating</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600"
              alt="shopping"
              className="rounded-3xl w-full h-[400px] md:h-[500px] object-cover"
            />

            <div className="absolute -bottom-6 -left-2 md:-left-6 bg-white shadow-xl rounded-2xl p-4 flex items-center gap-3">
              <img
                src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
                alt=""
                className="w-12 h-12 rounded-lg bg-gray-100"
              />
              <div>
                <p className="font-semibold text-sm">Best Seller</p>
                <p className="text-xs text-gray-500">2.5k+ Sold Today</p>
              </div>
              <span className="ml-2 text-gray-600 font-bold">$9.99</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-2xl text-center hover:shadow-md hover:-translate-y-1 transition duration-300">
            <div className="text-3xl mb-3">🚚</div>
            <h3 className="font-semibold">Free delivery</h3>
            <p className="text-sm text-gray-500 mt-1">On all orders above $50</p>
          </div>

          <div className="bg-white p-6 rounded-2xl text-center hover:shadow-md hover:-translate-y-1 transition duration-300">
            <div className="text-3xl mb-3">🔄</div>
            <h3 className="font-semibold">Easy Returns</h3>
            <p className="text-sm text-gray-500 mt-1">30 days return policy</p>
          </div>

          <div className="bg-white p-6 rounded-2xl text-center hover:shadow-md hover:-translate-y-1 transition duration-300">
            <div className="text-3xl mb-3">🔓</div>
            <h3 className="font-semibold">Secure Payment</h3>
            <p className="text-sm text-gray-500 mt-1">100% secure checkout</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;