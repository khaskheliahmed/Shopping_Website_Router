import React from 'react'

const Content = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Welcome to Our Shopping Platform</h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Discover a wide variety of products at unbeatable prices. From electronics to fashion, we offer everything you need for your daily life. Our platform is designed to provide you with the best shopping experience, whether you're browsing for the latest trends or looking for essential items.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          We bring you a seamless shopping experience with secure payments, fast shipping, and excellent customer support. Explore our categories and find exactly what you're looking for in just a few clicks.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Exclusive Offers</h2>
            <p className="text-gray-600">
              Stay updated with our exclusive deals and discounts. Don't miss out on special offers available only for a limited time. Save more on your favorite products!
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">New Arrivals</h2>
            <p className="text-gray-600">
              Be the first to shop the latest products in our store. From cutting-edge gadgets to the newest fashion trends, you'll always find something fresh and exciting.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Shop With Us?</h3>
          <p className="text-gray-600">
            We offer a curated selection of high-quality products, sourced from trusted suppliers. Our user-friendly platform makes it easy to find and buy the items you need, with detailed product descriptions and customer reviews to help you make informed decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content
