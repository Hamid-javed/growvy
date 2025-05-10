const JobSeekerCTASection = () => {
  return (
    <div className="py-12 px-6 sm:px-10 lg:px-16">
      <div className=" flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-16">
        <div className="md:w-1/2 text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-black mb-3 sm:mb-4 leading-tight">
            I'm a Job Seeker!
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 max-w-sm">
            Looking for job according to my <br />
            skills and requirements.
          </p>
          <button
            type="button"
            className="bg-green-600 hover:bg-[#00b048] text-white font-semibold text-base sm:text-lg py-2 px-10 rounded-full shadow-md transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
          >
            Jobs
          </button>
        </div>

        <div className="md:w-1/2 w-full flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src="img2.png"
            alt="Illustration of a sailor looking through a telescope, representing a job seeker"
            className="w-auto h-48 sm:h-56 md:h-64 lg:h-[280px] object-contain bg-transparent mix-blend-multiply"
          />
        </div>
      </div>
    </div>
  );
};

export default JobSeekerCTASection;
