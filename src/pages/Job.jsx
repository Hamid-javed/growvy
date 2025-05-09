import React from "react";
import JobSeeker from "../components/JobSeeker";
import TopJobsSection from "../components/jobs/TopJobs";
import JobSeekerCTASection from "../components/jobs/JobSeekerCTASection";
import GrowvyFooterSection from "../components/Footer";
import Navbar from "../components/Navbar";

const jobCategories = [
  "Tech",
  "Management",
  "Human Resource",
  "Marketing & Sales",
  "Accounts & Finance",
  "Customer Service",
];

const JobsSection = () => {
  return (
    <>
      <div className="bg-white font-sans">
        {" "}
        <div
          className="bg-[#EBF9EF] text-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-24 sm:pb-28
                      rounded-bl-[80px] rounded-br-[80px]
                      md:rounded-bl-[120px] md:rounded-br-[120px]
                      lg:rounded-bl-[150px] lg:rounded-br-[150px]
                      "
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4">
            Jobs
          </h2>
          <p className="text-sm sm:text-base text-gray-700 max-w-xl mx-auto leading-relaxed">
            "Join our team and shape the future—explore exciting career
            opportunities today!"
          </p>
        </div>
        <div className=" sm:-mt-20 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 ">
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-20">
            {jobCategories.map((category) => (
              <button
                key={category}
                type="button"
                className="w-full text-black font-semibold text-sm sm:text-base border-2 border-black rounded-2xl py-3 px-4 sm:px-6
                         hover:bg-gray-100 hover:border-gray-700 transition-colors duration-200
                         outline-none"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      <JobSeeker />
      <TopJobsSection />
      <JobSeekerCTASection />
      <GrowvyFooterSection />
    </>
  );
};

export default JobsSection;
