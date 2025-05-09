import React from "react";

const EcommerceOwnerSection = () => {
  return (
    <div className="bg-white py-12 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-12 lg:gap-16">
        {/* Text Content Section */}
        <div className="md:w-[55%] lg:w-1/2 text-left md:pr-8">
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-gray-900 mb-3 sm:mb-3 leading-tight">
            E-commerce Owner?
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 sm:mb-6 max-w-md">
            Optimize your business with smart <br />
            asset management, growth <br />
            strategies, and cutting-edge <br />
            solutions to boost sales and <br />
            efficiency with Growvy!
          </p>
          <button
            type="button"
            className="bg-green-600 cursor-pointer hover:bg-[#00b048] text-white font-semibold text-base sm:text-lg py-3 px-10 rounded-full shadow-md transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
          >
            Plans
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-[45%] lg:w-1/2 w-full flex justify-center md:justify-start">
          <img
            src="img6.png" // IMPORTANT: Replace this with the actual path to your image
            alt="E-commerce business tools and analytics illustration"
            className="w-full max-w-md lg:max-w-lg h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default EcommerceOwnerSection;
