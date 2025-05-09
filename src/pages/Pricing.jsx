import CallToAction from "../components/CallToAction";
import GrowvyFooterSection from "../components/Footer";
import RecruitmentSolutionSection from "../components/pricing/RecruitmentSolutionSection";

export const Pricing = () => {
  return (
    <>
      <div className="bg-white">
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
            Pricing
          </h1>
          <p className="text-sm sm:text-base text-gray-700 max-w-lg mx-auto leading-relaxed">
            "Discover flexible pricing plans tailored to your needs—start
            growing with us today!"
          </p>
        </div>
      </div>
      <RecruitmentSolutionSection />
      <CallToAction />
      <GrowvyFooterSection />
    </>
  );
};
