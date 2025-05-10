const plansData = [
  {
    id: 1,
    topStripeColor: "bg-teal-600",
    borderColor: "border-lime-400",
    title: "Basic CV Service",
    description:
      "Companies HR who are looking for a candidate pool to shortlist them with possible filters can access our database to reduce their headache to post jobs on different job portals.",
    serviceCostLabel: "Service Cost:",
    serviceCost: ["Price 30$ (9797 PKR) Discount 20$ (5600 PKR) Monthly"],
    benefitsLabel: "Benefits:",
    benefits: [
      "Companies Can access the database with monthly 200 Searches",
      "Manage Filters Like Skills, Cities, Experience etc",
      "Live chat experts help",
    ],
  },
  {
    id: 2,
    topStripeColor: "bg-lime-500",
    borderColor: "border-yellow-400",
    title: "Lead Generating",
    description:
      "Companies will directly get qualifying responses in their chat to schedule interviews at their own place and our service charges will apply on the candidate’s approch.",
    serviceCostLabel: "Service Cost:",
    serviceCost: ["Price 50$ (6998 PKR)", "(50$ will apply per 20 Candidates)"],
    benefitsLabel: "Benefits:",
    benefits: [
      "Companies Can create a job post on Growvy",
      "Manage Filters Like Skills, Cities, Experience etc",
      "Guide our Team to shortlist best candidates",
      "Live chat experts help",
    ],
  },
  {
    id: 3,
    topStripeColor: "bg-teal-600",
    borderColor: "border-lime-400",
    title: "Recruitment Service",
    description:
      "Our recruitment specialist will connect with companies HR Team and plan a complete hiring strategy to make their hire quick and fast.",
    serviceCostLabel: "Service Cost:",
    serviceCost: [
      "Price 40% of first Salary (For Experienced)",
      "(Can avail this package after one subscription)",
    ],
    benefitsLabel: "Benefits:",
    benefits: [
      "Client can create a job post",
      "Filters Like Skills, Cities, Exp etc",
      "Minor screening interview",
      "Whatsapp group with Team",
      "Complete A-Z hiring solution",
    ],
  },
];

const RecruitmentSolutionSection = () => {
  return (
    <>
      {" "}
      <div className=" py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="flex justify-center mb-6 sm:mb-8">
            <img
              src="img16.png"
              alt="Recruitment process illustration"
              className="h-24 sm:h-32 w-auto object-contain bg-transparent mix-blend-multiply"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Recruitment Solution
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
            "Unlock seamless hiring with our tailored Recruitment Plans—flexible
            pricing designed to find your perfect talent, fast!"
          </p>
          <button
            type="button"
            className="bg-green-600 hover:bg-[#00b048] text-white font-semibold text-base sm:text-lg py-2 px-10 rounded-full shadow-md transition-colors duration-300 ease-in-out"
          >
            Plans
          </button>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plansData.map((plan) => (
            <div
              key={plan.id}
              className={` rounded-3xl border-2 ${plan.borderColor} flex flex-col shadow-lg overflow-hidden`}
            >
              <div className="p-5 sm:p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-black mb-3">
                  {plan.title}
                </h3>
                <p className="text-sm text-gray-700 mb-5 flex-grow min-h-[100px] sm:min-h-[120px]">
                  {" "}
                  {plan.description}
                </p>

                {plan.serviceCost && plan.serviceCost.length > 0 && (
                  <div className="mb-5">
                    <p className="text-sm font-bold text-black mb-1">
                      {plan.serviceCostLabel}
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                      {plan.serviceCost.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {plan.benefits && plan.benefits.length > 0 && (
                  <div className="mb-6">
                    <p className="text-sm font-bold text-black mb-1">
                      {plan.benefitsLabel}
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                      {plan.benefits.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-auto">
                  {" "}
                  <button
                    type="button"
                    className="w-full bg-[#00C853] hover:bg-[#00b048] text-white font-semibold py-3 rounded-full text-center transition-colors duration-300 ease-in-out text-base"
                  >
                    Start Today
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="flex justify-center mb-6 sm:mb-8">
            <img
              src="img17.png"
              alt="Recruitment process illustration"
              className="h-24 sm:h-32 w-auto object-contain bg-transparent mix-blend-multiply"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Recruitment Solution
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
            "Unlock seamless hiring with our tailored Recruitment Plans—flexible
            pricing designed to find your perfect talent, fast!"
          </p>
          <button
            type="button"
            className="bg-green-600 hover:bg-[#00b048] text-white font-semibold text-base sm:text-lg py-2 px-10 rounded-full shadow-md transition-colors duration-300 ease-in-out"
          >
            Plans
          </button>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plansData.map((plan) => (
            <div
              key={plan.id}
              className={` rounded-3xl border-2 ${plan.borderColor} flex flex-col shadow-lg overflow-hidden`}
            >
              <div className="p-5 sm:p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-black mb-3">
                  E-commerce Solutions
                </h3>
                <p className="text-sm text-gray-700 mb-5 flex-grow min-h-[100px] sm:min-h-[120px]">
                  {" "}
                  {plan.description}
                </p>

                {plan.serviceCost && plan.serviceCost.length > 0 && (
                  <div className="mb-5">
                    <p className="text-sm font-bold text-black mb-1">
                      {plan.serviceCostLabel}
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                      {plan.serviceCost.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {plan.benefits && plan.benefits.length > 0 && (
                  <div className="mb-6">
                    <p className="text-sm font-bold text-black mb-1">
                      {plan.benefitsLabel}
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                      {plan.benefits.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-auto">
                  {" "}
                  <button
                    type="button"
                    className="w-full bg-[#00C853] hover:bg-[#00b048] text-white font-semibold py-3 rounded-full text-center transition-colors duration-300 ease-in-out text-base"
                  >
                    Start Today
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>{" "}
      <div className=" py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="flex justify-center mb-6 sm:mb-8">
            <img
              src="img18.png"
              alt="Recruitment process illustration"
              className="h-24 sm:h-32 w-auto object-contain bg-transparent mix-blend-multiply"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Recruitment Solution
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
            "Unlock seamless hiring with our tailored Recruitment Plans—flexible
            pricing designed to find your perfect talent, fast!"
          </p>
          <button
            type="button"
            className="bg-green-600 hover:bg-[#00b048] text-white font-semibold text-base sm:text-lg py-2 px-10 rounded-full shadow-md transition-colors duration-300 ease-in-out"
          >
            Plans
          </button>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plansData.map((plan) => (
            <div
              key={plan.id}
              className={` rounded-3xl border-2 ${plan.borderColor} flex flex-col shadow-lg overflow-hidden`}
            >
              <div className="p-5 sm:p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-black mb-3">
                  Business Solutions
                </h3>
                <p className="text-sm text-gray-700 mb-5 flex-grow min-h-[100px] sm:min-h-[120px]">
                  {" "}
                  {plan.description}
                </p>

                {plan.serviceCost && plan.serviceCost.length > 0 && (
                  <div className="mb-5">
                    <p className="text-sm font-bold text-black mb-1">
                      {plan.serviceCostLabel}
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                      {plan.serviceCost.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {plan.benefits && plan.benefits.length > 0 && (
                  <div className="mb-6">
                    <p className="text-sm font-bold text-black mb-1">
                      {plan.benefitsLabel}
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                      {plan.benefits.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-auto">
                  {" "}
                  <button
                    type="button"
                    className="w-full bg-[#00C853] hover:bg-[#00b048] text-white font-semibold py-3 rounded-full text-center transition-colors duration-300 ease-in-out text-base"
                  >
                    Start Today
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecruitmentSolutionSection;
