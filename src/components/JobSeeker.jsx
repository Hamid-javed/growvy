const JobSeeker = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-[52px] font-bold text-black mb-5 sm:mb-6 leading-tight">
        Join Growvy's 50M+ Job Seeker <br />
        Community & Get Hired Faster!
      </h1>
      <p className="text-base sm:text-lg text-gray-700 max-w-xl md:max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
        "Build your profile, get noticed by top employers, and access exclusive
        job <br />
        opportunities tailored to your skills. Your next career move starts
        here!"
      </p>
      <button
        type="button"
        className="bg-green-600 cursor-pointer hover:bg-[#00b048] text-white font-bold text-lg py-3 sm:py-3 px-10 sm:px-14 rounded-full shadow-md transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
      >
        Sign In
      </button>
    </div>
  );
};

export default JobSeeker;
