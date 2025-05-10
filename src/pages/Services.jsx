import JobSeeker from "../components/services/JobSeeker";
import UserTypesSection from "../components/services/UserTypeService";
import CallToAction from "../components/CallToAction";
import GrowvyFooterSection from "../components/Footer";
const ServicesSection = () => {
  return (
    <>
      <div className="bg-white font-sans">
        <div
          className="bg-[#def8e5] text-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-24 sm:pb-28 md:pb-32 
                      rounded-bl-[60px] rounded-br-[60px] 
                      sm:rounded-bl-[80px] sm:rounded-br-[80px] 
                      lg:rounded-bl-[120px] lg:rounded-br-[120px]
                      xl:rounded-bl-[150px] xl:rounded-br-[150px]
                      relative z-10"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4">
            Services
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            At Growvy, we provide innovative, cost-effective solutions to help
            businesses and professionals thrive.
          </p>
        </div>
        {/* Services Cards Section */}
        {/* Negative margin pulls this section up slightly under the curve */}
        <div className="relative z-0 -mt-16 sm:-mt-20 px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex flex-wrap justify-between items-center mt-8 ">
            <img src="img9.png " alt="" srcset="" />
            <img src="img10.png " alt="" srcset="" />
            <img src="img11.png " alt="" srcset="" />
          </div>
        </div>
      </div>
      <JobSeeker />
      <UserTypesSection />
      <CallToAction />
      <GrowvyFooterSection />
    </>
  );
};

export default ServicesSection;
