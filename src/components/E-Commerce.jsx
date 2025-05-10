const EcommerceOwnerSection = () => {
  return (
    <section className=" py-20 px-6 md:px-16 lg:px-28 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
        {/* Left Image Section */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-start">
          <img
            src="img6.png" // Replace with your image path
            alt="E-commerce tools and analytics"
            className="w-full bg-transparent mix-blend-multiply max-w-[400px] sm:max-w-[500px] lg:max-w-[550px] object-contain"
          />
        </div>

        {/* Right Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-gray-900 leading-tight mb-4">
            E-commerce Owner?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 font-medium leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
            Boost your online store’s potential with smart asset management,
            sales optimization tools, and growth strategies — all powered by
            <span className="text-green-600 font-semibold"> Growvy</span>.
          </p>

          <button
            type="button"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold text-base sm:text-lg py-3 px-10 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            Explore Plans
          </button>
        </div>
      </div>
    </section>
  );
};

export default EcommerceOwnerSection;
