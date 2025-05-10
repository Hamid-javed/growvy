const HeroSection = () => {
  return (
    <section className=" py-20 md:px-16 lg:px-28">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Maximize <br className="hidden sm:block" />
            <span className="text-green-600">business efficiency</span>
          </h1>

          <h2 className="text-4xl sm:text-5xl font-semibold mt-2 flex gap-3 items-center md:justify-start justify-center">
            with{" "}
            <span className="block text-4xl sm:text-5xl text-green-600 font-extrabold">
              Growvy
            </span>
          </h2>

          <p className="mt-6 text-gray-600 text-base sm:text-lg max-w-lg mx-auto md:mx-0">
            Scale your company with tailored strategies, market insights, and
            expert consulting
          </p>

          <div className="mt-8">
            <button className="bg-green-600 hover:bg-green-700 transition px-8 py-3 rounded-full text-white text-lg font-semibold shadow-lg">
              Start Today
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex-1">
          <img
            src="img1.png"
            alt="Growvy Hero"
            className="w-full max-w-md mx-auto md:mx-0 object-contain bg-transparent mix-blend-multiply animate-fade-in"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
