const CallToAction = () => {
  return (
    <section className=" py-12 px-6 sm:px-10 lg:px-20 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="img7.png"
            alt="Person working on laptop"
            className="w-full h-auto object-contain-transparent mix-blend-multiply"
          />
        </div>

        {/* CTA Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to Grow with Us?
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6">
            Join over{" "}
            <span className="font-semibold text-green-600">10,000+</span> users
            worldwide and start scheduling calls with ease. It takes less than a
            minute to begin!
          </p>

          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold text-base sm:text-lg px-8 py-3 rounded-full shadow-md transition-all duration-300">
            Schedule Call Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
