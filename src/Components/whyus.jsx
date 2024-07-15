import React from "react";

const WhyChooseUs = () => (
  <div className="bg-gray-100 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center">
        Why Choose Us?
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3">
        <div className="relative group bg-white p-6 rounded-lg shadow-lg">
          <div>
            <span className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              {/* Icon */}
            </span>
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">
            Quality Products
          </h3>
          <p className="mt-2 text-base text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="relative group bg-white p-6 rounded-lg shadow-lg">
          <div>
            <span className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              {/* Icon */}
            </span>
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">
            Fast Delivery
          </h3>
          <p className="mt-2 text-base text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="relative group bg-white p-6 rounded-lg shadow-lg">
          <div>
            <span className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              {/* Icon */}
            </span>
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">
            Excellent Support
          </h3>
          <p className="mt-2 text-base text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default WhyChooseUs;
