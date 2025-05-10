import React from "react";

// Placeholder Star SVG (Filled Yellow)
const StarIcon = ({ className = "w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// Placeholder User Icon SVG (Filled Black)
const UserIcon = ({ className = "w-8 h-8 sm:w-10 sm:h-10 text-black" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
      clipRule="evenodd"
    />
  </svg>
);

const testimonialData = [
  { id: 1, text: "Excellent Experience with growvy." },
  { id: 2, text: "Excellent Experience with growvy." },
];

const paginationDots = [
  { id: "p1", size: "small" },
  { id: "p2", size: "small" },
  { id: "p3", size: "small" },
  { id: "p4", size: "large" },
  { id: "p5", size: "large" },
  { id: "p6", size: "large" },
  { id: "p7", size: "small" },
  { id: "p8", size: "small" },
  { id: "p9", size: "small" },
];

const JobSeekerCommunityV2Section = () => {
  return (
    <div className=" py-12 sm:py-16 px-4 sm:px-6 lg:px-8 my-10">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-[46px] font-bold text-black mb-5 leading-tight">
          Join Growvy's 50M+ Job Seeker <br className="hidden sm:inline" />
          Community & Get Hired Faster!
        </h1>
        <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto mb-8 leading-relaxed">
          "Build your profile, get noticed by top employers, and access
          exclusive job opportunities tailored to your skills. Your next career
          move starts here!"
        </p>
        <button
          type="button"
          className="bg-green-600 hover:bg-[#00b048] text-white font-semibold text-base sm:text-lg py-2 px-10 rounded-full shadow-md transition-colors duration-300 ease-in-out"
        >
          Sign In
        </button>
      </div>

      <div className="max-w-4xl mx-auto mt-16 sm:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-0">
          {testimonialData.map((testimonial) => (
            <div key={testimonial.id} className="relative px-4 sm:px-0">
              {" "}
              <div className="absolute left-1/2 md:left-0 top-0 transform -translate-x-1/2 -translate-y-1/2 md:translate-x-[-25%] z-10">
                {" "}
                <div className="bg-white border-2 border-black rounded-full p-1 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shadow-md">
                  <UserIcon className="w-10 h-10 sm:w-12 sm:h-12" />
                </div>
              </div>
              <div className="border-2 border-lime-400 rounded-2xl pt-10 pb-6 px-6 text-center md:text-left shadow-sm h-full">
                <p className="text-sm sm:text-base text-gray-700 mb-3">
                  {testimonial.text}
                </p>
                <div className="flex justify-center md:justify-start space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center space-x-1.5 sm:space-x-2 mt-12 sm:mt-16">
        {paginationDots.map((dot) => (
          <div
            key={dot.id}
            className={`rounded-full bg-green-500 
                        ${
                          dot.size === "large"
                            ? "w-2.5 h-2.5 sm:w-3 sm:h-3"
                            : "w-1.5 h-1.5 sm:w-2 sm:h-2 opacity-70"
                        }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default JobSeekerCommunityV2Section;
