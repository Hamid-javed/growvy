const JobSeeker = () => {
  return (
    <section className="relative py-24 px-6 md:px-16 lg:px-28 overflow-hidden text-center">
      {/* Decorative Gradient Blob */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-green-100 rounded-full blur-[120px] opacity-70"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-[52px] font-extrabold text-gray-900 leading-snug mb-6">
          Join <span className="text-green-600">Growvy's</span> 50M+ Job Seeker
          <br className="hidden sm:block" /> Community & Get Hired Faster!
        </h1>

        <p className="text-lg sm:text-xl text-gray-700 font-medium leading-relaxed mb-10">
          Build your profile, stand out to top employers, and access job
          opportunities <br className="hidden sm:block" /> tailored to your
          skills. Your next big career move starts here!
        </p>

        <button
          type="button"
          className="bg-green-600 hover:bg-green-700 transition-all duration-300 text-white font-semibold text-lg py-3 px-12 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300"
        >
          Sign In
        </button>
      </div>
    </section>
  );
};

export default JobSeeker;
