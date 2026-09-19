import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          About <span className="text-blue-600">ShopHub</span>
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          Your trusted destination for quality products at unbeatable prices. We
          bring the best from around the world to your doorstep.
        </p>
      </section>

      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center pb-16">
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600"
          alt="Our Story"
          className="rounded-3xl w-full h-[350px] md:h-[450px] object-cover"
        />

        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>

          <p className="text-gray-600 mb-4">
            Founded in 2024, <span className="text-blue-600">ShopHub</span>{" "}
            started with a simple idea: everyone should have access to
            high-quality products without overpaying. From fashion to
            electronics, beauty to home essentials.{" "}
          </p>

          <p className="text-gray-600 mb-6">
            Today we serve over 10,000+ happy customers nationwide with fast
            delivery, easy returns, and dedicated support. Your satisfaction is
            our success.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-2xl">
              <h3 className="text-2xl font-bold text-blue-600">10k+</h3>
              <p className="text-sm text-gray-600">Happy Customers</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-2xl">
              <h3 className="text-2xl font-bold text-blue-600">190+</h3>
              <p className="text-sm text-gray-600">Premium Products</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-xl mb-4">
                ✔
              </div>
              <h3 className="font-bold text-lg">Quality Assured</h3>
              <p className="text-gray-500 text-sm mt-2">
                Every product is checked for quality. We sell only what we would
                use ourselves.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-xl mb-4">
                🚚
              </div>
              <h3 className="font-bold text-lg">Fast Delivery</h3>
              <p className="text-gray-500 text-sm mt-2">
                Free delivery on orders above 50$. Delivered in 2-3 days across
                the country.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-xl mb-4">
                💬
              </div>
              <h3 className="font-bold text-lg">Customer Support</h3>
              <p className="text-gray-500 text-sm mt-2">
                24/7 support team ready to help you with any question or return.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold">Ready to Shop?</h2>
        <p className="text-gray-500 mt-2">Find your perfect product today</p>

        <Link
          to="/products"
          className="inline-block mt-6 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Browse Products
        </Link>
      </section>
    </div>
  );
};

export default About;