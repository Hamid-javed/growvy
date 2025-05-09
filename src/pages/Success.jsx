import GrowvyFooterSection from "../components/Footer";
import JobSeekerCommunityV2Section from "../components/pricing/Review";

const Success = () => {
  return (
    <>
      <div className="pb-20">
        {" "}
        <div
          className="bg-[#EBF9EF] text-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-20 sm:pb-24 md:pb-28
                   rounded-bl-[80px] rounded-br-[80px]
                   sm:rounded-bl-[100px] sm:rounded-br-[100px]
                   md:rounded-bl-[150px] md:rounded-br-[150px]
                   lg:rounded-bl-[200px] lg:rounded-br-[200px]
                   xl:rounded-bl-[250px] xl:rounded-br-[250px]"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4">
            Success
          </h1>
          <p className="text-sm sm:text-base text-gray-700 max-w-lg mx-auto leading-relaxed">
            "Discover flexible pricing plans tailored to your needs—start
            growing with us today!"
          </p>
        </div>
      </div>
      <div className="bg-white flex flex-col items-center justify-center pb-6 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-8">
          Join over 10k users worldwide
        </h2>
        <button
          type="button"
          className="bg-green-600 cursor-pointer hover:bg-[#00b048] text-white font-semibold text-base sm:text-lg py-3 px-8 sm:py-3 sm:px-10 rounded-full shadow-md transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        >
          View Pricing
        </button>
      </div>
      <img className="mx-auto w-[60vw]" src="img19.png" alt="" srcset="" />
      <JobSeekerCommunityV2Section />
      <GrowvyFooterSection />
    </>
  );
};

export default Success;
