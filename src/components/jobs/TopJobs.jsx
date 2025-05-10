import React from "react";

const topJobsData = [
  "Business Developer",
  "Finance Manager",
  "Human Resource Manager",
  "Software Engineer",
  "Web Developer",
  "Graphic Designer / Ui / Ux",
  "SEO Expert",
  "Android Developer",
  "Floor Manager",
  "Sales Representative",
  "Data Entry Operator",
  "Delivery Man",
  "Urdu / English Call Center Agent",
  "Morning Shift Jobs for Females",
  "Accountant",
];

const TopJobsSection = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="">
        <h2 className="text-3xl sm:text-4xl font-bold text-black text-center mb-10">
          Top Jobs
        </h2>
        <div className="space-y-3">
          {topJobsData.map((jobTitle, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-2 border-black rounded-full p-2 sm:p-3"
            >
              <span className="text-sm sm:text-base text-black ml-3 sm:ml-4">
                {jobTitle}
              </span>
              <button
                type="button"
                className="bg-green-600 cursor-pointer hover:bg-[#00b048] text-white text-xs sm:text-sm font-semibold py-2 px-4 sm:px-5 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 whitespace-nowrap"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopJobsSection;
