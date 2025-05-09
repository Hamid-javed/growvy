const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 py-16 gap-10">
      <div className="text-center md:text-left flex-1">
        <div>
          <span className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight block">
            Maximize
            <br /> business efficiency
          </span>
          <span className="text-2xl sm:text-3xl text-green-600 pl-20 font-bold block">
            with
          </span>
          <span className="text-green-600 text-4xl sm:text-6xl font-bold block">
            Growvy
          </span>
        </div>

        <p className="my-2 text-sm sm:text-base md:text-lg font-medium max-w-md mx-auto md:mx-0">
          Scale your company with tailored strategies, market insights, and
          expert consulting
        </p>

        <button className="mt-4 px-8 py-3 text-base sm:text-lg bg-green-600 text-white rounded-full font-semibold">
          Start Today
        </button>
      </div>

      <div className="flex-1">
        <img
          className="w-full max-w-[500px] mx-auto object-contain"
          src="img1.png"
          alt="Hero"
        />
      </div>
    </div>
  );
};

export default HeroSection;
